import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import LinkedInProvider from 'next-auth/providers/linkedin';
import CredentialsProvider from 'next-auth/providers/credentials';
import { queryUser } from '@/lib/db';
import { verifyPassword } from '@/lib/auth';
import { headers } from 'next/headers';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      client: { client_secret_post_method: "post" },
      issuer: 'https://www.linkedin.com/oauth',
      wellKnown: 'https://www.linkedin.com/oauth/.well-known/openid-configuration',
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const results = await queryUser('SELECT * FROM users WHERE email = ?', [credentials.email]);
        if (results.length === 0) return null;
        const user = results[0];
        const isValid = await verifyPassword(credentials.password, user.password);
        if (!isValid) return null;
        return { id: user.id, email: user.email, name: user.name, role: user.role };
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      const headerList = headers();
      const ip = headerList.get('x-forwarded-for') || '127.0.0.1';
      const userAgent = headerList.get('user-agent') || 'Unknown';

      try {
        if (account.provider !== 'credentials') {
          const existing = await queryUser('SELECT id FROM users WHERE email = ?', [user.email]);
          
          if (existing.length === 0) {
            await queryUser(
              'INSERT INTO users (name, email, email_verified, auth_provider, last_login_ip, last_login_at, browser_info, onboarding_completed) VALUES (?, ?, NOW(), ?, ?, NOW(), ?, 0)',
              [user.name, user.email, account.provider, ip, userAgent]
            );
          } else {
            await queryUser(
              'UPDATE users SET last_login_ip = ?, last_login_at = NOW(), browser_info = ? WHERE email = ?',
              [ip, userAgent, user.email]
            );
          }
        } else {
          await queryUser(
            'UPDATE users SET last_login_ip = ?, last_login_at = NOW(), browser_info = ? WHERE email = ?',
            [ip, userAgent, user.email]
          );
        }
        return true;
      } catch (err) {
        console.error('Error in signIn callback:', err);
        return true; 
      }
    },
    async jwt({ token, user, trigger, session }) {
      // Handle manual session updates (from onboarding)
      if (trigger === "update" && session) {
        token.onboarding_completed = 1;
        token.role = session.role;
        return token;
      }

      if (user) {
        const dbUser = await queryUser('SELECT id, role, onboarding_completed FROM users WHERE email = ?', [user.email]);
        if (dbUser.length > 0) {
          token.id = dbUser[0].id;
          token.role = dbUser[0].role;
          token.onboarding_completed = dbUser[0].onboarding_completed;
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      session.user.onboarding_completed = token.onboarding_completed;
      return session;
    }
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
