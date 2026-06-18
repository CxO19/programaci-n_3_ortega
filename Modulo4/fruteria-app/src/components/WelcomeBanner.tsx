interface WelcomeBannerProps {
    subtitle?: string;
}

export default function WelcomeBanner({ subtitle }: WelcomeBannerProps) {
  return (
    <div style={{ background: '#00f300', color: '#fff', padding: '16px 24px',opacity: 0.5, borderRadius: 8 }}>
      <h1 style={{ margin: 0, fontSize: 32 }}>Bienvenido al curso de React</h1>
      <p style={{ margin: '6px 0 0', opacity: 0.85 }}>Aprende React 19 con TypeScript</p>
      <p style={{ margin: '6px 0 0', opacity: 0.85 }}>{subtitle ?? 'Programacion IV'}</p>
    </div>
  )
}