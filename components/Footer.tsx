export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0d0d0d', color: 'rgba(223,225,226,0.55)' }}>
      <style>{`
        .footer-link {
          font-size: 15px;
          font-weight: 200;
          color: rgba(223,225,226,0.55);
          display: block;
          margin-bottom: 8px;
          text-decoration: none;
          font-family: var(--font-sans);
          transition: color 0.2s;
        }
        .footer-link:hover { color: #dfe1e2; }
      `}</style>

      {/* Main grid */}
      <div
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: 80,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 48,
        }}
        className="max-md:!grid-cols-2 max-md:!p-6"
      >
        {/* Col 1: Collection */}
        <div>
          <span
            style={{
              fontSize: 11,
              fontWeight: 200,
              color: 'rgba(223,225,226,0.3)',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginBottom: 16,
              display: 'block',
              fontFamily: 'var(--font-sans)',
            }}
          >
            Collection
          </span>
          {['Service Tray', 'Coaster', 'Bottle Container', 'About AVIRA', 'Craft', 'Materials'].map((link) => (
            <a key={link} href="#" className="footer-link">{link}</a>
          ))}
        </div>

        {/* Col 2: Contact */}
        <div>
          <span
            style={{
              fontSize: 11,
              fontWeight: 200,
              color: 'rgba(223,225,226,0.3)',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginBottom: 16,
              display: 'block',
              fontFamily: 'var(--font-sans)',
            }}
          >
            Contact
          </span>
          <p style={{ fontSize: 15, fontWeight: 200, color: 'rgba(223,225,226,0.55)', margin: '0 0 8px 0', fontFamily: 'var(--font-sans)' }}>
            Geneva, Switzerland
          </p>
          <a href="#" className="footer-link">Schedule a call</a>
          <a href="mailto:hello@avira.studio" className="footer-link">hello@avira.studio</a>
        </div>

        {/* Col 3: Follow Us */}
        <div>
          <span
            style={{
              fontSize: 11,
              fontWeight: 200,
              color: 'rgba(223,225,226,0.3)',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginBottom: 16,
              display: 'block',
              fontFamily: 'var(--font-sans)',
            }}
          >
            Follow Us
          </span>
          {['Instagram', 'LinkedIn'].map((link) => (
            <a key={link} href="#" className="footer-link">{link}</a>
          ))}
        </div>

        {/* Col 4: Newsletter */}
        <div>
          <span
            style={{
              fontSize: 11,
              fontWeight: 200,
              color: 'rgba(223,225,226,0.3)',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginBottom: 16,
              display: 'block',
              fontFamily: 'var(--font-sans)',
            }}
          >
            Stay Updated
          </span>
          <p style={{ fontSize: 15, fontWeight: 200, color: 'rgba(223,225,226,0.55)', margin: '0 0 16px 0', lineHeight: 1.5, fontFamily: 'var(--font-sans)' }}>
            Subscribe for new pieces and stories from the workshop.
          </p>
          <input
            type="email"
            placeholder="your@email.com"
            style={{
              width: '100%',
              backgroundColor: '#1e2022',
              border: '1px solid rgba(223,225,226,0.1)',
              color: '#dfe1e2',
              fontWeight: 200,
              padding: '10px 16px',
              borderRadius: 2,
              fontSize: 14,
              marginBottom: 8,
              fontFamily: 'var(--font-sans)',
              boxSizing: 'border-box',
              outline: 'none',
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#dfe1e2',
              color: '#0d0d0d',
              fontWeight: 200,
              padding: '10px 20px',
              borderRadius: 2,
              fontSize: 14,
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
            }}
          >
            Sign up
          </button>
          <p style={{ fontSize: 11, color: 'rgba(223,225,226,0.25)', marginTop: 8, fontFamily: 'var(--font-sans)', fontWeight: 200 }}>
            By subscribing you agree to our Privacy Policy.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px 80px 80px' }} className="max-md:!px-6 max-md:!pb-10">
        <div
          style={{
            borderTop: '1px solid rgba(223,225,226,0.08)',
            paddingTop: 32,
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 13,
            fontWeight: 200,
            color: 'rgba(223,225,226,0.3)',
            fontFamily: 'var(--font-sans)',
          }}
        >
          <span>© 2025 AVIRA</span>
          <span>Objects of Purpose</span>
        </div>
      </div>
    </footer>
  )
}
