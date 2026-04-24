const stats = [
  { value: '100%', label: 'reclaimed origin' },
  { value: '0', label: 'synthetic materials' },
  { value: 'Each', label: 'piece unique' },
]

export default function DarkStatement() {
  return (
    <section id="about" style={{ backgroundColor: 'rgba(13,13,13,0.93)' }}>
      {/* Top two-column text block */}
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '80px 80px 64px 80px',
          display: 'grid',
          gridTemplateColumns: '50% 50%',
          gap: '48px',
          alignItems: 'start',
        }}
        className="max-md:!grid-cols-1 max-md:!px-6 max-md:!pt-12 max-md:!pb-10"
      >
        {/* Left column */}
        <div>
          <span
            style={{
              fontSize: '13px',
              fontWeight: 200,
              color: 'rgba(223,225,226,0.4)',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginBottom: '16px',
              display: 'block',
              fontFamily: 'var(--font-sans)',
            }}
          >
            EXCEPTIONAL CRAFTSMANSHIP
          </span>
          <h2
            style={{
              fontSize: '60px',
              fontWeight: 200,
              color: '#dfe1e2',
              textTransform: 'uppercase',
              lineHeight: 1.0,
              fontFamily: 'var(--font-sans)',
              margin: 0,
            }}
            className="max-md:!text-[30px]"
          >
            <span style={{ display: 'block' }}>THE</span>
            <span style={{ display: 'block' }}>PURPOSEFUL</span>
            <span style={{ display: 'block' }}>WAY TO MAKE</span>
            <span style={{ display: 'block' }}>OBJECTS</span>
          </h2>
        </div>

        {/* Right column */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            justifyContent: 'center',
          }}
        >
          <p
            style={{
              fontSize: '18px',
              fontWeight: 200,
              color: 'rgba(223,225,226,0.55)',
              lineHeight: 1.6,
              maxWidth: '480px',
              fontFamily: 'var(--font-sans)',
              margin: 0,
            }}
            className="max-md:!text-base"
          >
            AVIRA goes beyond aesthetics. Every piece combines hand-craftsmanship
            with salvaged ocean materials. From sourcing to final finish, each
            object is built without compromise — to be used, not displayed.
          </p>

          {/* Button row */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              type="button"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid rgba(223,225,226,0.25)',
                color: 'rgba(223,225,226,0.6)',
                padding: '13px 20px',
                borderRadius: '2px',
                fontSize: '13px',
                fontWeight: 200,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
              }}
            >
              View materials
            </button>
            <button
              type="button"
              style={{
                backgroundColor: '#dfe1e2',
                color: '#0d0d0d',
                padding: '13px 20px',
                borderRadius: '2px',
                fontSize: '13px',
                fontWeight: 200,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
              }}
            >
              View collection
            </button>
          </div>

          {/* Stats block */}
          <div style={{ marginTop: '32px' }}>
            <span
              style={{
                fontSize: '13px',
                fontWeight: 200,
                color: 'rgba(223,225,226,0.4)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '12px',
                display: 'block',
                fontFamily: 'var(--font-sans)',
              }}
            >
              WITH AVIRA YOUR HOME CAN
            </span>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px',
              }}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span
                    style={{
                      fontSize: '32px',
                      fontWeight: 200,
                      color: '#dfe1e2',
                      display: 'block',
                      fontFamily: 'var(--font-sans)',
                    }}
                    className="max-md:!text-2xl"
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontSize: '13px',
                      color: 'rgba(223,225,226,0.4)',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 200,
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Large image placeholder */}
      <div
        style={{
          width: '100%',
          height: '700px',
          backgroundColor: 'rgba(30,32,34,0.92)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'rgba(223,225,226,0.15)',
          fontSize: '11px',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          fontFamily: 'var(--font-sans)',
          fontWeight: 200,
        }}
        className="max-md:!h-[300px]"
      >
        WORKSHOP
      </div>
    </section>
  )
}
