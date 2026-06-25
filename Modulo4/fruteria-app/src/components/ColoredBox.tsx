interface ColoredBoxProps {
  color: string
  width?: number
  height?: number
  label?: string
  borderRadius?: number
}

export default function ColoredBox({
  color,
  width = 80,
  height = 80,
  label,
  borderRadius = 8,

  
}: ColoredBoxProps) {
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <div
        style={{
          width,
          height,
          backgroundColor: color,
          borderRadius: borderRadius,
          border: 'none',
        }}
      />
      {label && <span style={{ fontSize: 12, color: '#666' }}>{label}</span>}
    </div>
  )
}