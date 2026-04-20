'use client'

import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    tab: '01 SOURCE',
    label: 'RECLAIMED MATERIAL SOURCING',
    title: 'NO SHORTCUTS,\nNO WAITING',
    description:
      'We source exclusively from certified yacht breakers and sailing clubs across Europe. Every plank of teak, every sheet of carbon, every steel fitting is checked for marine provenance before it enters our workshop.',
    bullets: [
      'Source — reclaimed teak and carbon from certified yacht breakers',
      'Verify — marine provenance checked before acquisition',
      'Catalogue — every material logged with vessel history',
    ],
    imageBg: '#2a2016',
    imageText: 'SOURCE',
  },
  {
    tab: '02 CRAFT',
    label: 'HAND WORKSHOP PRODUCTION',
    title: 'YOUR MATERIAL,\nMADE PURPOSEFUL',
    description:
      'Each piece is CNC-routed, welded or woven by hand in our Geneva workshop. No injection moulding, no batch production — every AVIRA is built as a single commission.',
    bullets: [
      'Cut — precision CNC routing of teak and carbon',
      'Shape — hand-formed 316L stainless steel',
      'Assemble — each component fitted by hand',
    ],
    imageBg: '#0d0d0d',
    imageText: 'CRAFT',
  },
  {
    tab: '03 FINISH',
    label: 'PRECISION SURFACE FINISHING',
    title: 'DETAILS\nTHAT MATTER',
    description:
      'Brushing, engraving, rope-weaving. The final finish of each piece takes longer than building it. We work to a standard your fingertips will notice before your eyes do.',
    bullets: [
      'Brush — directional grain applied to all steel surfaces',
      'Engrave — CNC-cut concentric patterns into teak',
      'Inspect — every piece approved against our finish standard',
    ],
    imageBg: '#3a3d40',
    imageText: 'FINISH',
  },
  {
    tab: '04 DELIVER',
    label: 'WHITE-GLOVE DELIVERY',
    title: 'READY FOR\nYOUR SPACE',
    description:
      'Each AVIRA arrives gift-packaged in a custom kraft box with a certificate of provenance — the boat it came from, the year it sailed.',
    bullets: [
      'Package — custom kraft box, tissue-wrapped',
      'Certify — vessel provenance certificate included',
      'Deliver — courier tracked to your door',
    ],
    imageBg: '#1a1c1e',
    imageText: 'DELIVER',
  },
]

export default function ScrollSteps() {
  const [activeStep, setActiveStep] = useState(0)
  const panelRefs = useRef<(HTMLDivElement | null)[]>([])

  // Scroll observer — drives active tab on scroll
  useEffect(() => {
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
    panelRefs.current.forEach((p) => p && observer.observe(p))
    return () => observer.disconnect()
  }, [])

  // Click handler — highlight tab immediately, then scroll to panel
  const scrollToStep = (index: number) => {
    setActiveStep(index)
    const el = panelRefs.current[index]
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 160
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <section style={{ position: 'relative', backgroundColor: '#1e2022' }}>
      {/* Sticky tab bar */}
      <div
        style={{
          position: 'sticky',
          top: 80,
          zIndex: 8,
          backgroundColor: 'rgba(30,32,34,0.97)',
          borderBottom: '1px solid rgba(223,225,226,0.08)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            padding: '0 80px',
          }}
          className="max-md:!grid-cols-none max-md:!flex max-md:!overflow-x-auto no-scrollbar max-md:!px-4"
        >
          {steps.map((step, i) => (
            <button
              key={i}
              onClick={() => scrollToStep(i)}
              style={{
                padding: '20px 0',
                fontSize: 13,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontFamily: 'var(--font-sans)',
                fontWeight: 200,
                color: activeStep === i ? '#dfe1e2' : 'rgba(223,225,226,0.3)',
                background: 'none',
                border: 'none',
                borderBottom: activeStep === i ? '1px solid #dfe1e2' : '1px solid transparent',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'color 0.2s',
                whiteSpace: 'nowrap',
              }}
              className="max-md:!min-w-[120px]"
            >
              {step.tab}
            </button>
          ))}
        </div>
      </div>

      {/* Step panels */}
      {steps.map((step, i) => (
        <div
          key={i}
          ref={(el) => { panelRefs.current[i] = el }}
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
              borderRadius: 2,
              overflow: 'hidden',
              flexShrink: 0,
              backgroundColor: step.imageBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(223,225,226,0.15)',
              fontSize: 11,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-sans)',
              fontWeight: 200,
            }}
          >
            {step.imageText}
          </div>

          {/* Right: text */}
          <div style={{ width: '40%', display: 'flex', flexDirection: 'column', gap: 24 }}>
            <span
              style={{
                fontSize: 13,
                color: 'rgba(223,225,226,0.4)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontFamily: 'var(--font-sans)',
                fontWeight: 200,
              }}
            >
              {step.label}
            </span>
            <h2
              style={{
                fontSize: 60,
                fontWeight: 200,
                color: '#dfe1e2',
                textTransform: 'uppercase',
                lineHeight: 1.0,
                fontFamily: 'var(--font-sans)',
                margin: 0,
                whiteSpace: 'pre-line',
              }}
            >
              {step.title}
            </h2>
            <p
              style={{
                fontSize: 16,
                color: 'rgba(223,225,226,0.55)',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                fontWeight: 200,
                margin: 0,
              }}
            >
              {step.description}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {step.bullets.map((b, bi) => (
                <li
                  key={bi}
                  style={{
                    fontSize: 15,
                    color: 'rgba(223,225,226,0.5)',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 200,
                  }}
                >
                  <strong style={{ color: '#dfe1e2', fontWeight: 200 }}>{b.split('—')[0]}</strong>
                  {b.includes('—') ? '—' + b.split('—')[1] : ''}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

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
