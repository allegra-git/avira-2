'use client'

import dynamic from 'next/dynamic'

const Tray3D = dynamic(() => import('./Tray3D'), { ssr: false })

export default function ProductShowcase() {
  return (
    <section id="collection" style={{ backgroundColor: 'rgba(30,32,34,0.96)', position: 'relative', overflow: 'hidden' }}>
      {/* Tray3D canvas — full width, 700px tall */}
      <Tray3D height={700} autoSpin={true} />

      {/* Spec card — absolute bottom-right */}
      <div style={{
        position: 'absolute', bottom: 40, right: 40,
        backgroundColor: 'rgba(13,13,13,0.85)',
        border: '1px solid rgba(223,225,226,0.15)',
        padding: '20px 24px', borderRadius: 2, width: 220,
        backdropFilter: 'blur(4px)',
      }}>
        {[
          { label: 'MATERIAL', value: '316L MARINE STEEL' },
          { label: 'DIMENSIONS', value: '320 × 240 mm' },
          { label: 'FINISH', value: 'BRUSHED' },
        ].map(({ label, value }) => (
          <div key={label} style={{ marginBottom: 12 }}>
            <span style={{
              fontSize: 10,
              color: 'rgba(223,225,226,0.45)',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              display: 'block',
              fontFamily: 'var(--font-sans)',
              fontWeight: 200,
            }}>{label}</span>
            <span style={{
              fontSize: 15,
              color: '#dfe1e2',
              fontFamily: 'var(--font-sans)',
              fontWeight: 200,
            }}>{value}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
