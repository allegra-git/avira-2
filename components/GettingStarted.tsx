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
    <section style={{ backgroundColor: 'rgba(30,32,34,0.96)', padding: '80px 0' }}>
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
        className="max-md:!px-6 max-md:!flex-col max-md:!gap-8"
      >
        <h2
          style={{
            fontSize: 60,
            fontWeight: 200,
            color: '#dfe1e2',
            lineHeight: 1.05,
            fontFamily: 'var(--font-sans)',
            margin: 0,
          }}
          className="max-md:!text-[36px]"
        >
          {'get '}
          <br />
          {'your '}
          <br />
          <span style={{ letterSpacing: '0.15em' }}>AVIRA</span>
          <br />
          {'in just a '}
          <br />
          {'few steps'}
        </h2>

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
        className="max-md:!grid-cols-2 max-md:!px-6"
      >
        {steps.map((step) => (
          <div key={step.num} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Number */}
            <span
              style={{
                fontSize: 14,
                fontWeight: 200,
                color: step.active ? '#dfe1e2' : 'rgba(223,225,226,0.25)',
                opacity: step.active ? 0.9 : 1,
                fontFamily: 'var(--font-sans)',
              }}
            >
              {step.num}
            </span>

            {/* Title */}
            <span
              style={{
                fontSize: step.active ? 28 : 22,
                fontWeight: 200,
                color: step.active ? '#dfe1e2' : 'rgba(223,225,226,0.25)',
                textTransform: 'uppercase',
                letterSpacing: step.active ? '0.05em' : undefined,
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
                  fontSize: 15,
                  fontWeight: 200,
                  color: 'rgba(223,225,226,0.5)',
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
    </section>
  )
}
