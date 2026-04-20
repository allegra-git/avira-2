const steps = [
  {
    num: '01',
    title: 'REQUEST A CONSULTATION',
    desc: 'Book a 15-minute call to discuss your space, your taste, and which AVIRA pieces would suit it. We will walk you through the collection and discuss customisation options.',
    active: true,
  },
  {
    num: '02',
    title: 'RECEIVE YOUR TAILORED PROPOSAL',
    desc: null,
    active: false,
  },
  {
    num: '03',
    title: 'CONFIRM YOUR ORDER',
    desc: null,
    active: false,
  },
  {
    num: '04',
    title: 'RECEIVE YOUR AVIRA',
    desc: null,
    active: false,
  },
]

export default function GettingStarted() {
  return (
    <section style={{ backgroundColor: '#85837C', padding: '80px 0' }}>
      {/* Top area */}
      <div
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: '0 80px 64px 80px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <h2
          style={{
            fontSize: 60,
            color: '#F7F3E8',
            lineHeight: 1.05,
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            margin: 0,
          }}
        >
          {'get '}
          <br />
          {'your '}
          <br />
          <strong style={{ fontWeight: 700 }}>AVIRA</strong>
          <br />
          {'in just a '}
          <br />
          {'few steps'}
        </h2>

        <button
          style={{
            backgroundColor: '#E93A37',
            color: '#FBF9F4',
            padding: '14px 20px',
            borderRadius: 4,
            fontSize: 16,
            fontFamily: 'var(--font-sans)',
            border: 'none',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          View collection
        </button>
      </div>

      {/* 4-col step grid */}
      <div
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 32,
          padding: '0 80px 80px 80px',
        }}
      >
        {steps.map((step) => (
          <div key={step.num} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Number */}
            <span
              style={{
                fontSize: 14,
                color: step.active ? '#E93A37' : '#D3D1C9',
                fontFamily: 'var(--font-sans)',
              }}
            >
              {step.num}
            </span>

            {/* Title */}
            <span
              style={{
                fontSize: step.active ? 32 : 24,
                fontWeight: step.active ? 700 : 400,
                color: step.active ? '#F7F3E8' : '#D3D1C9',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-sans)',
                lineHeight: 1.1,
              }}
            >
              {step.title}
            </span>

            {/* Description (active step only) */}
            {step.active && step.desc && (
              <p
                style={{
                  fontSize: 16,
                  color: '#D3D1C9',
                  lineHeight: 1.6,
                  margin: 0,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {step.desc}
              </p>
            )}
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 767px) {
          .getting-started-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .getting-started-heading {
            font-size: 36px !important;
          }
        }
      `}</style>
    </section>
  )
}
