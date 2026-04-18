import { auth } from '@/auth'
import { Session } from 'next-auth'

export async function requireEditor(): Promise<Session> {
  const session = await auth()
  if (!session?.user) {
    throw new Error('No estás autenticado')
  }
  return session as Session
}

export async function requireAdmin(): Promise<Session> {
  const session = await auth()
  if (!session?.user) {
    throw new Error('No estás autenticado')
  }
  if ((session.user as any).role !== 'ADMIN') {
    throw new Error('No tienes permisos para esta acción')
  }
  return session as Session
}
