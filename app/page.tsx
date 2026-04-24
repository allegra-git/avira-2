'use client'

import { useEffect, useState } from 'react'

const LETTERS = ['A', 'V', 'I', 'R', 'A']
const DELAY_START = 700   // ms before first letter
const LETTER_STEP = 340   // ms between each letter start
const LETTER_DUR  = 480   // ms each letter takes to draw

export default function TeaserPage() {
  const [active, setActive]       = useState<boolean[]>(Array(5).fill(false))
  const [showTagline, setShowTagline] = useState(false)
  const [showCta, setShowCta]     = useState(false)

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []

    LETTERS.forEach((_, i) => {
      timers.push(setTimeout(() => {
        setActive(prev => { const n = [...prev]; n[i] = true; return n })
      }, DELAY_START + i * LETTER_STEP))
    })

    const allDone = DELAY_START + (LETTERS.length - 1) * LETTER_STEP + LETTER_DUR
    timers.push(setTimeout(() => setShowTagline(true), allDone + 200))
    timers.push(setTimeout(() => setShowCta(true),     allDone + 700))

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <main style={{
      height: '100dvh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#0d0d0d',
    }}>
      {/* Brushed steel grain overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(112deg, rgba(0,0,0,0.72) 0%, rgba(255,255,255,0.07) 48%, rgba(0,0,0,0.65) 100%),
          repeating-linear-gradient(90deg,
            rgba(255,255,255,0.028) 0px, rgba(255,255,255,0.028) 1px,
            rgba(0,0,0,0.020) 1px, rgba(0,0,0,0.020) 2px,
            transparent 2px, transparent 3px)
        `,
        backgroundSize: '100vw 100vh, 3px 100vh',
        pointerEvents: 'none',
      }} />

      <style>{`
        @keyframes write-in {
          from { clip-path: inset(0 101% 0 0); }
          to   { clip-path: inset(0 0%   0 0); }
        }
        .avira-letter {
          display: inline-block;
          clip-path: inset(0 101% 0 0);
        }
        .avira-letter.drawn {
          animation: write-in ${LETTER_DUR}ms cubic-bezier(0.22, 0, 0.36, 1) forwards;
        }
        .cta-link { transition: color 0.2s, border-color 0.2s; }
        .cta-link:hover { color: #dfe1e2 !important; border-color: rgba(223,225,226,0.5) !important; }
      `}</style>

      {/* A V I R A */}
      <div style={{ display: 'flex', alignItems: 'baseline', position: 'relative', zIndex: 1 }}>
        {LETTERS.map((letter, i) => (
          <span
            key={i}
            className={`avira-letter${active[i] ? ' drawn' : ''}`}
            style={{
              fontSize: 'clamp(72px, 14vw, 160px)',
              fontFamily: 'var(--font-sans)',
              fontWeight: 200,
              color: '#dfe1e2',
              letterSpacing: '0.22em',
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Tagline */}
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        fontWeight: 200,
        color: 'rgba(223,225,226,0.35)',
        letterSpacing: '0.55em',
        textTransform: 'uppercase',
        marginTop: 28,
        position: 'relative',
        zIndex: 1,
        opacity: showTagline ? 1 : 0,
        transition: 'opacity 1.1s ease',
      }}>
        Objects of Purpose
      </p>

      {/* Enter CTA */}
      <a
        href="/collection"
        className="cta-link"
        style={{
          position: 'absolute',
          bottom: 56,
          fontFamily: 'var(--font-sans)',
          fontSize: 11,
          fontWeight: 200,
          color: 'rgba(223,225,226,0.4)',
          letterSpacing: '0.38em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          zIndex: 1,
          opacity: showCta ? 1 : 0,
          transition: 'opacity 0.9s ease',
          paddingBottom: 4,
          borderBottom: '1px solid rgba(223,225,226,0.18)',
        }}
      >
        Enter Collection
      </a>
    </main>
  )
}
