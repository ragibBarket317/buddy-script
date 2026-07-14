'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        textAlign: 'center',
        background: '#f7f8fa',
      }}
    >
      <h1
        style={{
          fontSize: '120px',
          fontWeight: 700,
          color: '#377DFF',
          margin: 0,
          lineHeight: 1,
        }}
      >
        404
      </h1>

      <h2
        style={{
          fontSize: '28px',
          fontWeight: 600,
          color: '#112032',
          margin: '16px 0 8px',
        }}
      >
        Page Not Found
      </h2>

      <p
        style={{
          fontSize: '16px',
          color: '#666',
          maxWidth: '420px',
          margin: '0 0 32px',
        }}
      >
        Sorry, the page you are looking for doesn&apos;t exist or has been
        moved.
      </p>

      <div style={{ display: 'flex', gap: '12px' }}>
        <button
          type="button"
          onClick={() => router.back()}
          style={{
            padding: '12px 28px',
            borderRadius: '8px',
            border: '1px solid #377DFF',
            background: '#fff',
            color: '#377DFF',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Go Back
        </button>

        <Link
          href="/feed"
          style={{
            padding: '12px 28px',
            borderRadius: '8px',
            border: 'none',
            background: '#377DFF',
            color: '#fff',
            fontWeight: 600,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          Go to Feed
        </Link>
      </div>
    </div>
  )
}
