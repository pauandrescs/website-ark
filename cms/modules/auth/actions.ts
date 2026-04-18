'use server'

import { signIn, signOut } from '@/auth'
import { LoginSchema } from './schema'
import { AuthError } from 'next-auth'
import { redirect } from 'next/navigation'

export async function login(prevState: any, formData: FormData) {
  const raw = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const parsed = LoginSchema.safeParse(raw)
  if (!parsed.success) {
    return {
      error: 'Datos inválidos',
      errors: parsed.error.flatten().fieldErrors,
    }
  }

  try {
    await signIn('credentials', {
      email: parsed.data.email,
      password: parsed.data.password,
      redirect: false,
    })

    redirect('/dashboard')
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Email o contraseña incorrectos' }
        case 'AccessDenied':
          return { error: 'Acceso denegado' }
        default:
          return { error: 'Algo salió mal' }
      }
    }
    throw error
  }
}

export async function logout() {
  await signOut({ redirect: true, redirectUrl: '/login' })
}
