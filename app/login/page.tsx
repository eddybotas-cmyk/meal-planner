import { signIn } from '@/lib/auth'

export default function LoginPage() {
  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        fontFamily: 'var(--font-main)',
      }}
    >
      <form
        action={async (formData) => {
          'use server'

          await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirectTo: '/',
          })
        }}
        style={{
          backgroundColor: 'var(--card)',
          border: '1px solid var(--border)',
          padding: '30px',
          borderRadius: '8px',
          width: '320px',
        }}
      >
        <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>
          Iniciar sesión
        </h1>

        <div style={{ marginBottom: '15px' }}>
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            required
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Contraseña</label>
          <br />
          <input
            type="password"
            name="password"
            required
            style={inputStyle}
          />
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: 'var(--header)',
            color: 'var(--foreground)',
            border: '1px solid var(--border)',
            cursor: 'pointer',
          }}
        >
          Entrar
        </button>
      </form>
    </main>
  )
}

const inputStyle = {
  width: '100%',
  padding: '8px',
  backgroundColor: 'var(--input)',
  color: 'var(--foreground)',
  border: '1px solid var(--border)',
}