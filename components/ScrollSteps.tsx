'use client'

import { useEffect, useState } from 'react'

const steps = [
  {
    tab: '01 SOURCE',
    label: 'RECLAIMED MATERIAL SOURCING',
    title: (
      <>
        {'NO'}
        <strong style={{ fontWeight: 700 }}>{' SHORTCUTS,'}</strong>
        {' /\nNO'}
        <strong style={{ fontWeight: 700 }}>{' WAITING'}</strong>
      </>
    ),
    description:
      'We source exclusively from certified yacht breakers and sailing clubs across Europe. Every plank of teak, every sheet of carbon, every steel fitting is checked for marine provenance before it enters our workshop.',
    bullets: [
      { word: 'Source', text: 'reclaimed teak and carbon from certified yacht breakers' },
      { word: 'Verify', text: 'marine provenance checked before acquisition' },
      { word: 'Catalogue', text: 'every material logged with vessel history' },
    ],
    imageBg: '#7a6040',
    imageText: 'SOURCE',
  },
  {
    tab: '02 CRAFT',
    label: 'HAND WORKSHOP PRODUCTION',
    title: (
      <>
        {'YOUR /\nMATERIAL, /\nMADE /\nPURPOSEFUL'}
      </>
    ),
    description:
      'Each piece is CNC-routed, welded or woven by hand in our Geneva workshop. No injection moulding, no batch production — every AVIRA is built as a single commission.',
    bullets: [
      { word: 'Cut', text: 'precision CNC routing of teak and carbon' },
      { word: 'Shape', text: 'hand-formed 316L stainless steel' },
      { word: 'Assemble', text: 'each component fitted by hand' },
    ],
    imageBg: '#2a2a28',
    imageText: 'CRAFT',
  },
  {
    tab: '03 FINISH',
    label: 'PRECISION SURFACE FINISHING',
    title: (
      <>
        {'DETAILS /\nTHAT /\nMATTER'}
      </>
    ),
    description:
      'Brushing, engraving, rope-weaving. The final finish of each piece takes longer than building it. We work to a standard your fingertips will notice before your eyes do.',
    bullets: [
      { word: 'Brush', text: 'directional grain applied to all steel surfaces' },
      { word: 'Engrave', text: 'CNC-cut concentric patterns into teak' },
      { word: 'Inspect', text: 'every piece approved against our finish standard' },
    ],
    imageBg: '#7e8285',
    imageText: 'FINISH',
  },
  {
    tab: '04 DELIVER',
    label: 'WHITE-GLOVE DELIVERY',
    title: (
      <>
        {'READY /\nFOR YOUR /\nSPACE'}
      </>
    ),
    description:
      'Each AVIRA arrives gift-packaged in a custom kraft box with a certificate of provenance — the boat it came from, the year it sailed.',
    bullets: [
      { word: 'Package', text: 'custom kraft box, tissue-wrapped' },
      { word: 'Certify', text: 'vessel provenance certificate included' },
      { word: 'Deliver', text: 'courier tracked to your door' },
    ],
    imageBg: '#3a4a3a',
    imageText: 'DELIVER',
  },
]

export default function ScrollSteps() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const panels = document.querySelectorAll('.step-panel')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStep(Number((entry.target as HTMLElement).dataset.index))
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px' }
    )
    panels.forEach((p) => observer.observe(p))
    return () => observer.disconnect()
  }, [])

  return (
    <section style={{ position: 'relative', backgroundColor: '#F7F3E8' }}>
      {/* Sticky tab bar */}
      <div
        style={{
          position: 'sticky',
          top: 80,
          zIndex: 8,
          backgroundColor: '#F7F3E8',
          borderBottom: '1px solid rgba(0,0,0,0.1)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            padding: '0 80px',
            overflowX: 'auto',
          }}
          className="no-scrollbar"
        >
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                padding: '20px 0',
                fontSize: 14,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: activeStep === i ? '#E93A37' : '#ADAAA2',
                fontFamily: 'var(--font-sans)',
                minWidth: 120,
                whiteSpace: 'nowrap',
              }}
            >
              {step.tab}
            </div>
          ))}
        </div>
      </div>

      {/* Step panels */}
      {steps.map((step, i) => (
        <div
          key={i}
          className="step-panel"
          data-index={i}
          style={{
            height: 1400,
            display: 'flex',
            alignItems: 'center',
            padding: '0 80px',
            gap: 80,
          }}
        >
          {/* Left: image placeholder */}
          <div
            style={{
              width: '55%',
              height: 900,
              backgroundColor: step.imageBg,
              borderRadius: 4,
              overflow: 'hidden',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                color: 'rgba(255,255,255,0.3)',
                fontSize: 14,
                textTransform: 'uppercase',
                letterSpacing: '0.3em',
                fontFamily: 'var(--font-sans)',
              }}
            >
              {step.imageText}
            </span>
          </div>

          {/* Right: text */}
          <div
            style={{
              width: '40%',
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}
          >
            {/* Step label */}
            <span
              style={{
                fontSize: 16,
                color: '#ADAAA2',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontFamily: 'var(--font-sans)',
              }}
            >
              {step.label}
            </span>

            {/* H2 title */}
            <h2
              style={{
                fontSize: 60,
                color: '#E93A37',
                textTransform: 'uppercase',
                lineHeight: 1.0,
                margin: 0,
                fontFamily: 'var(--font-sans)',
                whiteSpace: 'pre-line',
              }}
            >
              {step.title}
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: 16,
                color: '#85837C',
                lineHeight: 1.6,
                margin: 0,
                fontFamily: 'var(--font-sans)',
              }}
            >
              {step.description}
            </p>

            {/* Bullet list */}
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {step.bullets.map((bullet, j) => (
                <li
                  key={j}
                  style={{
                    fontSize: 16,
                    color: '#85837C',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  <strong style={{ color: '#000', fontWeight: 700 }}>{bullet.word}</strong>
                  {' — '}
                  {bullet.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* Hide scrollbar utility */}
      <style>{`
        .no-scrollbar { scrollbar-width: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        @media (max-width: 767px) {
          .step-panel {
            flex-direction: column !important;
            height: auto !important;
            min-height: 800px !important;
            padding: 40px 20px !important;
            gap: 32px !important;
          }
          .step-panel > div:first-child {
            width: 100% !important;
            height: 300px !important;
          }
          .step-panel > div:last-child {
            width: 100% !important;
          }
          .step-panel h2 {
            font-size: 36px !important;
          }
        }
      `}</style>
    </section>
  )
}
