const materials = [
  { label: 'TEAK DECK PLANKING', backgroundColor: '#8B6914' },
  { label: 'CARBON COMPOSITE', backgroundColor: '#1a1a1a' },
  { label: '316L MARINE STEEL', backgroundColor: '#7e8285' },
  { label: 'YACHT RIGGING ROPE', backgroundColor: '#C4A35A' },
]

export default function ProblemStatement() {
  return (
    <section id="materials" style={{ backgroundColor: 'rgba(30,32,34,0.92)', paddingTop: '64px' }}>
      <style>{`
        .ps-link { opacity: 0.7; transition: opacity 0.2s; }
        .ps-link:hover { opacity: 1.0; }
      `}</style>

      {/* Top text block */}
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 80px 48px 80px',
          display: 'grid',
          gridTemplateColumns: '50% 50%',
          gap: '48px',
        }}
        className="max-md:!grid-cols-1 max-md:!px-6"
      >
        {/* Left col — H2 */}
        <h2
          style={{
            fontSize: '32px',
            color: '#dfe1e2',
            fontWeight: 200,
            textTransform: 'uppercase',
            lineHeight: 1.1,
            fontFamily: 'var(--font-sans)',
            margin: 0,
          }}
          className="max-md:!text-2xl"
        >
          <span style={{ fontWeight: 200, display: 'block' }}>THE BEAUTY OF</span>
          <span style={{ fontWeight: 200, display: 'block' }}>RECLAIMED</span>
          <span style={{ fontWeight: 200, display: 'block' }}>MATERIALS</span>
        </h2>

        {/* Right col — body + link */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p style={{
            fontSize: '18px',
            fontWeight: 200,
            color: 'rgba(223,225,226,0.55)',
            lineHeight: 1.7,
            fontFamily: 'var(--font-sans)',
            margin: 0,
          }}>
            Every AVIRA piece begins with salvage — teak deck planking stripped
            from decommissioned yachts, carbon composite hull off-cuts, and 316L
            marine-grade stainless steel hardware with decades of ocean history.
          </p>

          <p style={{
            fontSize: '18px',
            fontWeight: 200,
            color: 'rgba(223,225,226,0.55)',
            lineHeight: 1.7,
            fontFamily: 'var(--font-sans)',
            margin: 0,
          }}>
            Nothing is wasted. Materials that once sailed the world become objects
            of quiet, enduring purpose for the spaces where life is lived.
          </p>

          <a
            href="/mission"
            className="ps-link"
            style={{
              fontSize: '18px',
              color: '#dfe1e2',
              fontWeight: 200,
              fontFamily: 'var(--font-sans)',
              textDecoration: 'none',
            }}
          >
            Learn about our materials
          </a>
        </div>
      </div>

      {/* Horizontal image strip */}
      <div className="no-scrollbar" style={{ width: '100%', overflowX: 'auto' }}>
        <div style={{
          display: 'flex',
          gap: '16px',
          paddingLeft: '80px',
          paddingBottom: '40px',
          width: 'fit-content',
        }}>
          {materials.map((mat) => (
            <div
              key={mat.label}
              style={{ width: '300px', flexShrink: 0 }}
              className="max-md:!w-[240px]"
            >
              {/* Color block */}
              <div style={{
                height: '240px',
                backgroundColor: mat.backgroundColor,
                borderRadius: '2px',
                border: '1px solid rgba(223,225,226,0.1)',
              }} />
              {/* Label */}
              <p style={{
                fontSize: '11px',
                color: 'rgba(223,225,226,0.45)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginTop: '8px',
                marginBottom: 0,
                fontFamily: 'var(--font-sans)',
                fontWeight: 200,
              }}>
                {mat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
