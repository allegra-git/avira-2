'use client'

// Pure-CSS write-on animation — no JS state, works in all browsers including Safari.
// Each letter gets an increasing animation-delay so they appear one by one left-to-right.

const LETTERS = ['A', 'V', 'I', 'R', 'A']
const STEP    = 0.34  // seconds between letter starts
const DUR     = 0.52  // seconds each letter takes to draw
const START   = 0.5   // initial pause before first letter

// Total time when last letter finishes
const LAST_DONE = START + (LETTERS.length - 1) * STEP + DUR

export default function TeaserPage() {
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
        /* Write-on: clip from right, reveal left-to-right */
        @keyframes write-in {
          from {
            -webkit-clip-path: inset(0 101% 0 0);
            clip-path: inset(0 101% 0 0);
          }
          to {
            -webkit-clip-path: inset(0 0% 0 0);
            clip-path: inset(0 0% 0 0);
          }
        }

        /* Tagline and CTA fade in after all letters drawn */
        @keyframes fade-up-in {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .avira-letter {
          display: inline-block;
          -webkit-clip-path: inset(0 101% 0 0);
          clip-path: inset(0 101% 0 0);
          animation: write-in ${DUR}s cubic-bezier(0.22, 0, 0.38, 1) forwards;
        }

        .avira-tagline {
          opacity: 0;
          animation: fade-up-in 1s ease forwards;
          animation-delay: ${(LAST_DONE + 0.2).toFixed(2)}s;
        }

        .avira-cta {
          opacity: 0;
          animation: fade-up-in 0.9s ease forwards;
          animation-delay: ${(LAST_DONE + 0.7).toFixed(2)}s;
        }

        .avira-cta:hover {
          color: #dfe1e2 !important;
          border-color: rgba(223,225,226,0.55) !important;
        }
      `}</style>

      {/* A V I R A */}
      <div style={{ display: 'flex', alignItems: 'baseline', position: 'relative', zIndex: 1 }}>
        {LETTERS.map((letter, i) => (
          <span
            key={i}
            className="avira-letter"
            style={{
              fontSize: 'clamp(72px, 14vw, 160px)',
              fontFamily: 'var(--font-sans)',
              fontWeight: 200,
              color: '#dfe1e2',
              letterSpacing: '0.22em',
              animationDelay: `${(START + i * STEP).toFixed(2)}s`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Tagline */}
      <p
        className="avira-tagline"
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 11,
          fontWeight: 200,
          color: 'rgba(223,225,226,0.35)',
          letterSpacing: '0.55em',
          textTransform: 'uppercase',
          marginTop: 28,
          position: 'relative',
          zIndex: 1,
        }}
      >
        Objects of Purpose
      </p>

      {/* Enter CTA */}
      <a
        href="/collection"
        className="avira-cta"
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
          paddingBottom: 4,
          borderBottom: '1px solid rgba(223,225,226,0.18)',
          transition: 'color 0.2s, border-color 0.2s',
        }}
      >
        Enter Collection
      </a>
    </main>
  )
}
