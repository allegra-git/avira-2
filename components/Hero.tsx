export default function Hero() {
  return (
    <section
      style={{
        backgroundColor: 'transparent',
        paddingTop: '80px',
        paddingBottom: 0,
      }}
    >
      {/* Inline styles for button hover states */}
      <style>{`
        .hero-btn-primary {
          font-family: var(--font-sans);
          background-color: #dfe1e2;
          color: #0d0d0d;
          padding: 14px 24px;
          border-radius: 2px;
          font-size: 14px;
          font-weight: 200;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: opacity 0.2s;
          box-sizing: border-box;
        }
        .hero-btn-primary:hover { opacity: 0.85; }

        .hero-btn-ghost {
          font-family: var(--font-sans);
          background-color: transparent;
          color: #dfe1e2;
          border: 1px solid rgba(223,225,226,0.35);
          padding: 14px 24px;
          border-radius: 2px;
          font-size: 14px;
          font-weight: 200;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: opacity 0.2s;
          box-sizing: border-box;
        }
        .hero-btn-ghost:hover { opacity: 0.7; }
      `}</style>

      {/* 2-col grid container */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '55fr 45fr',
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '40px 80px 0 80px',
          alignItems: 'center',
        }}
        className="max-md:!grid-cols-1 max-md:!px-6"
      >
        {/* Left column — title */}
        <div>
          <h1
            style={{
              fontSize: '60px',
              color: '#dfe1e2',
              textTransform: 'uppercase',
              lineHeight: 1.0,
              fontFamily: 'var(--font-sans)',
            }}
            className="max-md:!text-[36px]"
          >
            <span style={{ fontWeight: 200, display: 'block' }}>THE</span>
            <span style={{ fontWeight: 200, display: 'block' }}>LUXURY</span>
            <span style={{ fontWeight: 200, display: 'block' }}>TABLEWARE</span>
            <span style={{ fontWeight: 200, display: 'block' }}>FOR MODERN</span>
            <span style={{ fontWeight: 200, display: 'block' }}>SPACES</span>
          </h1>
        </div>

        {/* Right column — subtitle + CTAs */}
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
              fontFamily: 'var(--font-sans)',
              fontSize: '18px',
              fontWeight: 200,
              color: 'rgba(223,225,226,0.6)',
              lineHeight: 1.5,
              maxWidth: '400px',
            }}
          >
            Each piece handcrafted from reclaimed yacht materials — teak, carbon
            composite, and 316L marine-grade stainless steel.
          </p>

          <div
            style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}
            className="max-md:!flex-col"
          >
            <a href="#collection" className="hero-btn-primary">
              View Collection
            </a>

            <a href="#craft" className="hero-btn-ghost">
              Learn the craft
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
