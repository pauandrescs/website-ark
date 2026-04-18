'use client'

import { useActionState } from 'react'
import { login } from '@/modules/auth/actions'

export default function LoginPage() {
  const [state, formAction] = useActionState(login, undefined)

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-ark-black">ARK CMS</h1>
        <p className="text-ark-muted">Panel de administración de contenidos</p>
      </div>

      <form action={formAction} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-ark-black">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full px-4 py-2 border border-ark-border rounded-lg bg-white text-ark-black placeholder-ark-muted focus:outline-none focus:ring-2 focus:ring-ark-gold"
            placeholder="tu@email.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-ark-black">
            Contraseña
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="w-full px-4 py-2 border border-ark-border rounded-lg bg-white text-ark-black placeholder-ark-muted focus:outline-none focus:ring-2 focus:ring-ark-gold"
            placeholder="••••••"
          />
        </div>

        {state?.error && (
          <div className="p-3 rounded-lg bg-red-50 border border-red-200">
            <p className="text-sm text-red-700">{state.error}</p>
          </div>
        )}

        <button
          type="submit"
          className="w-full py-2 px-4 bg-ark-gold text-ark-black font-medium rounded-lg hover:bg-ark-gold-light transition-colors"
        >
          Iniciar sesión
        </button>
      </form>

      <p className="text-center text-sm text-ark-muted">
        Contacta al administrador para crear una cuenta
      </p>
    </div>
  )
}
