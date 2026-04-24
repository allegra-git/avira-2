const stats = [
  {
    value: '55,000',
    unit: 'tonnes',
    label: 'Marine composite waste generated every year — globally',
    context: 'And rising 10% annually as the 1970s–90s GRP fleet hits end-of-life simultaneously.',
  },
  {
    value: '< 5%',
    unit: '',
    label: 'Of Europe\'s end-of-life boats are properly recycled',
    context: 'Fewer than 3,000 of the 60,000–120,000 vessels that reach end-of-life annually in Europe are recovered. The rest are abandoned, incinerated, or landfilled.',
  },
  {
    value: '300–800',
    unit: 'kg',
    label: 'Teak stripped from a single yacht refit — typically landfilled',
    context: 'Teak decks last 10–15 years before replacement. Each refit generates hundreds of kilograms of premium hardwood with nowhere to go.',
  },
  {
    value: '51% → 25%',
    unit: '',
    label: 'Myanmar\'s forest cover — lost since 2005',
    context: '3.38 million hectares of tree cover lost between 2001 and 2018. Marine-grade teak demand is a direct driver. Myanmar banned log exports in 2014; the EU followed with full sanctions in 2021.',
  },
  {
    value: '683,000',
    unit: 'tonnes',
    label: 'Composite boat waste Europe will accumulate by 2025',
    context: 'Current recycling infrastructure can handle only 15% of the rate at which this waste is building up. There is no economically viable recycling solution for GRP at scale today.',
  },
  {
    value: '80%',
    unit: '',
    label: 'Of a product\'s environmental impact is fixed at the design stage',
    context: 'Before a single cut is made. Which is why AVIRA begins with material that already exists — no extraction, no new harvest, no new production.',
  },
]

export default function WasteStats() {
  return (
    <section style={{ backgroundColor: 'rgba(10,10,10,0.96)' }}>
      <style>{`
        .stat-card {
          border-top: 1px solid rgba(223,225,226,0.08);
          padding: 40px 0;
          transition: border-color 0.3s;
        }
        .stat-card:hover {
          border-top-color: rgba(223,225,226,0.22);
        }
      `}</style>

      {/* Section header */}
      <div style={{
        maxWidth: 1440,
        margin: '0 auto',
        padding: '80px 80px 0 80px',
      }}
        className="max-md:!px-6"
      >
        <span style={{
          fontSize: 11,
          fontWeight: 200,
          color: 'rgba(223,225,226,0.3)',
          textTransform: 'uppercase',
          letterSpacing: '0.18em',
          display: 'block',
          marginBottom: 20,
          fontFamily: 'var(--font-sans)',
        }}>
          The Industry in Numbers
        </span>
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontWeight: 200,
          color: '#dfe1e2',
          textTransform: 'uppercase',
          lineHeight: 1.05,
          fontFamily: 'var(--font-sans)',
          margin: '0 0 16px 0',
          maxWidth: 640,
        }}>
          A Waste Problem<br />The Industry Ignores
        </h2>
        <p style={{
          fontSize: 16,
          fontWeight: 200,
          color: 'rgba(223,225,226,0.45)',
          lineHeight: 1.7,
          fontFamily: 'var(--font-sans)',
          maxWidth: 560,
          margin: '0 0 64px 0',
        }}>
          Every refit strips hundreds of kilograms of teak, steel, and carbon from vessels — materials with decades of life left in them. Most of it ends up in landfill. These are the verified numbers behind the problem AVIRA was built to solve.
        </p>
      </div>

      {/* Stats grid */}
      <div style={{
        maxWidth: 1440,
        margin: '0 auto',
        padding: '0 80px 80px 80px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '0 48px',
      }}
        className="max-md:!grid-cols-1 max-md:!px-6"
      >
        {stats.map((stat, i) => (
          <div key={i} className="stat-card">
            {/* Large number */}
            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 8,
              marginBottom: 12,
            }}>
              <span style={{
                fontSize: 'clamp(36px, 4vw, 52px)',
                fontWeight: 200,
                color: '#dfe1e2',
                fontFamily: 'var(--font-sans)',
                lineHeight: 1,
              }}>
                {stat.value}
              </span>
              {stat.unit && (
                <span style={{
                  fontSize: 14,
                  fontWeight: 200,
                  color: 'rgba(223,225,226,0.4)',
                  fontFamily: 'var(--font-sans)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}>
                  {stat.unit}
                </span>
              )}
            </div>

            {/* Label */}
            <p style={{
              fontSize: 14,
              fontWeight: 200,
              color: '#dfe1e2',
              fontFamily: 'var(--font-sans)',
              lineHeight: 1.4,
              margin: '0 0 12px 0',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              {stat.label}
            </p>

            {/* Context */}
            <p style={{
              fontSize: 13,
              fontWeight: 200,
              color: 'rgba(223,225,226,0.38)',
              fontFamily: 'var(--font-sans)',
              lineHeight: 1.65,
              margin: 0,
            }}>
              {stat.context}
            </p>
          </div>
        ))}
      </div>

      {/* Source line */}
      <div style={{
        maxWidth: 1440,
        margin: '0 auto',
        padding: '0 80px 48px 80px',
        borderTop: '1px solid rgba(223,225,226,0.05)',
      }}
        className="max-md:!px-6"
      >
        <p style={{
          fontSize: 11,
          fontWeight: 200,
          color: 'rgba(223,225,226,0.2)',
          fontFamily: 'var(--font-sans)',
          lineHeight: 1.6,
          margin: '24px 0 0 0',
          maxWidth: 900,
        }}>
          Sources: Yachting Monthly / OSPAR / European Boating Industry / APER France / Global Forest Watch / ICIJ Deforestation Inc. Investigation / IntelMarketResearch Yacht Refit Report 2024. All figures represent published research and industry data verified as of 2024–2025.
        </p>
      </div>
    </section>
  )
}
