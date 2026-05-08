'use server';

import { sendMail } from './mail';
import { queryUser, queryBlog } from './db';
import { hashPassword, verifyPassword, setSession } from './auth';
import crypto from 'crypto';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function submitContactForm(formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const company = formData.get('company');
  const interest = formData.get('interest');
  const message = formData.get('message');

  const subject = `New Contact Form Submission from ${name}`;
  const text = `
    Name: ${name}
    Email: ${email}
    Company: ${company}
    Area of Interest: ${interest}
    Message: ${message}
  `;
  const html = `
    <h3>New Contact Form Submission</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Company:</strong> ${company}</p>
    <p><strong>Area of Interest:</strong> ${interest}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;

  return await sendMail({ subject, text, html });
}

export async function submitFeedbackForm(data) {
  const { name, email, issueType, severity, description, url } = data;

  const subject = `New Feedback/Issue Report: ${issueType} (${severity})`;
  const text = `
    Name: ${name}
    Email: ${email}
    Issue Type: ${issueType}
    Severity: ${severity}
    URL: ${url}
    Description: ${description}
  `;
  const html = `
    <h3>New Feedback/Issue Report</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Issue Type:</strong> ${issueType}</p>
    <p><strong>Severity:</strong> ${severity}</p>
    <p><strong>URL:</strong> ${url}</p>
    <p><strong>Description:</strong></p>
    <p>${description}</p>
  `;

  return await sendMail({ subject, text, html });
}

export async function submitNewsletter(formData) {
  const email = formData.get('email');
  
  const subject = `New Newsletter Subscription`;
  const text = `New subscription from: ${email}`;
  const html = `<p>New newsletter subscription from: <strong>${email}</strong></p>`;

  return await sendMail({ subject, text, html });
}

export async function submitContribution(data) {
  const { name, email, role, link, topic, pitch } = data;

  const subject = `New Contribution Pitch: ${topic}`;
  const text = `
    Name: ${name}
    Email: ${email}
    Role: ${role}
    Link: ${link}
    Topic: ${topic}
    Pitch: ${pitch}
  `;
  const html = `
    <h3>New Contribution Pitch</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Role:</strong> ${role}</p>
    <p><strong>Link:</strong> ${link}</p>
    <p><strong>Topic:</strong> ${topic}</p>
    <p><strong>Pitch:</strong></p>
    <p>${pitch}</p>
  `;

  return await sendMail({ subject, text, html });
}

export async function submitRegistration(data) {
  const { name, email, role } = data;

  const subject = `New Account Registration: ${name}`;
  const text = `
    New user registration:
    Name: ${name}
    Email: ${email}
    Role: ${role}
  `;
  const html = `
    <h3>New Account Registration</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Role:</strong> ${role}</p>
  `;

  return await sendMail({ subject, text, html });
}
import { headers } from 'next/headers';

export async function register(data) {
  const { name, email, password } = data;
  const headerList = headers();
  const ip = headerList.get('x-forwarded-for') || '127.0.0.1';
  const userAgent = headerList.get('user-agent') || 'Unknown';

  try {
    // Check if user exists
    const existing = await queryUser('SELECT id FROM users WHERE email = ?', [email]);
    if (existing.length > 0) return { success: false, error: 'Email already registered.' };

    const hashedPassword = await hashPassword(password);
    await queryUser(
      'INSERT INTO users (name, email, password, auth_provider, last_login_ip, last_login_at, browser_info) VALUES (?, ?, ?, ?, ?, NOW(), ?)',
      [name, email, hashedPassword, 'web', ip, userAgent]
    );

    return { success: true };
  } catch (err) {
    console.error('Registration error:', err);
    return { success: false, error: 'Internal server error.' };
  }
}

export async function login(data) {
  const { email, password } = data;

  try {
    const results = await queryUser('SELECT * FROM users WHERE email = ?', [email]);
    if (results.length === 0) return { success: false, error: 'Invalid credentials.' };

    const user = results[0];
    const valid = await verifyPassword(password, user.password);
    if (!valid) return { success: false, error: 'Invalid credentials.' };

    await setSession(user);
    return { success: true };
  } catch (err) {
    console.error('Login error:', err);
    return { success: false, error: 'Internal server error.' };
  }
}

export async function requestPasswordReset(email) {
  try {
    const results = await queryUser('SELECT id FROM users WHERE email = ?', [email]);
    if (results.length === 0) return { success: true }; // Don't leak user existence

    const token = crypto.randomBytes(32).toString('hex');
    const expiry = new Date(Date.now() + 3600000); // 1 hour

    await queryUser(
      'UPDATE users SET reset_token = ?, reset_token_expiry = ? WHERE email = ?',
      [token, expiry, email]
    );

    const resetUrl = `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/reset-password?token=${token}`;
    
    await sendMail({
      subject: 'Password Reset Request — ARK Platforms',
      text: `Click the link to reset your password: ${resetUrl}`,
      html: `
        <h3>Password Reset Request</h3>
        <p>Click the link below to reset your password. This link expires in 1 hour.</p>
        <a href="${resetUrl}" style="background: #c5a35d; color: #fff; padding: 12px 24px; text-decoration: none; display: inline-block;">Reset Password</a>
      `
    });

    return { success: true };
  } catch (err) {
    console.error('Reset request error:', err);
    return { success: false, error: 'Internal server error.' };
  }
}

export async function resetPassword(token, newPassword) {
  try {
    const results = await queryUser(
      'SELECT id FROM users WHERE reset_token = ? AND reset_token_expiry > NOW()',
      [token]
    );
    if (results.length === 0) return { success: false, error: 'Invalid or expired token.' };

    const hashedPassword = await hashPassword(newPassword);
    await queryUser(
      'UPDATE users SET password = ?, reset_token = NULL, reset_token_expiry = NULL WHERE id = ?',
      [hashedPassword, results[0].id]
    );

    return { success: true };
  } catch (err) {
    console.error('Reset password error:', err);
    return { success: false, error: 'Internal server error.' };
  }
}

import { withCache } from './redis';

export async function getBlogPosts() {
  return await withCache('blog:all_published', 300, async () => {
    try {
      // Only show published posts to the public
      const results = await queryBlog("SELECT * FROM posts WHERE status = 'published' ORDER BY date DESC");
      return results;
    } catch (err) {
      console.error('Fetch blog posts error:', err);
      return [];
    }
  });
}

export async function getBlogPostBySlug(slug) {
  return await withCache(`blog:post:${slug}`, 600, async () => {
    try {
      const userDbName = process.env.USER_DB_NAME;
      const results = await queryBlog(`
        SELECT p.*, u.bio, u.linkedin_url, u.twitter_url, u.website_url, u.avatar_url 
        FROM posts p 
        LEFT JOIN ${userDbName}.users u ON p.author_email = u.email 
        WHERE p.slug = ?
      `, [slug]);
      
      if (results.length === 0) return null;
      return results[0];
    } catch (err) {
      console.error('Fetch blog post error:', err);
      return null;
    }
  });
}

export async function incrementPostViews(slug) {
  try {
    await queryBlog('UPDATE posts SET views = views + 1 WHERE slug = ?', [slug]);
  } catch (err) {
    console.error('Increment views error:', err);
  }
}

function calculateReadTime(content) {
  if (!content) return '1 min read';
  // Remove HTML tags to count only text
  const text = content.replace(/<[^>]*>/g, '');
  const wordCount = text.trim().split(/\s+/).length;
  const wordsPerMinute = 225; // Standard reading speed
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

export async function createBlogPost(data) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) return { success: false, error: 'Unauthorized' };

  try {
    const { title, excerpt, category, author, date, cover, featured, content, is_premium, price } = data;
    const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    
    // Auto-calculate read time based on content
    const autoReadTime = calculateReadTime(content);

    // Default status for bloggers is 'review', admins can publish directly
    const role = session.user.role;
    const status = (role === 'admin') ? 'published' : 'review';

    await queryBlog(
      'INSERT INTO posts (slug, title, excerpt, category, author, author_email, date, readTime, cover, featured, content, status, is_premium, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [slug, title, excerpt, category, author, session.user.email, date, autoReadTime, cover, featured ? 1 : 0, content, status, is_premium ? 1 : 0, price || 0]
    );

    return { success: true, slug, status };
  } catch (err) {
    console.error('Create blog post error:', err);
    return { success: false, error: 'Internal server error.' };
  }
}

export async function updateUserProfile(data) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) return { success: false, error: 'Unauthorized' };

  try {
    const { name, bio, linkedin_url, twitter_url, website_url, avatar_url } = data;
    
    await queryUser(
      'UPDATE users SET name = ?, bio = ?, linkedin_url = ?, twitter_url = ?, website_url = ?, avatar_url = ? WHERE email = ?',
      [name, bio, linkedin_url, twitter_url, website_url, avatar_url, session.user.email]
    );

    return { success: true };
  } catch (err) {
    console.error('Update profile error:', err);
    return { success: false, error: 'Internal server error.' };
  }
}

export async function getUsers() {
  try {
    const results = await queryUser('SELECT id, name, email, created_at FROM users');
    return results;
  } catch (err) {
    console.error('Fetch users error:', err);
    return [];
  }
}

import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function completeOnboarding(type) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) return { success: false };

  try {
    await queryUser(
      'UPDATE users SET user_type = ?, role = ?, onboarding_completed = 1 WHERE email = ?',
      [type, type, session.user.email]
    );
    return { success: true };
  } catch (err) {
    console.error('Onboarding error:', err);
    return { success: false };
  }
}

export async function logoutAction() {
  cookies().delete('session');
  redirect('/login');
}
