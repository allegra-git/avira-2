const cards = [
  {
    title: 'Handcrafted quality, without compromise',
    description:
      'Every piece is built by hand in our workshop. No shortcuts, no production line — only skilled hands and the right materials.',
  },
  {
    title: 'Marine-grade durability',
    description:
      '316L stainless steel and teak are built to endure the ocean. They\'ll outlast anything you ask of them at home.',
  },
  {
    title: 'Each piece is unique',
    description:
      'Reclaimed materials mean no two pieces are identical. The grain, texture and patina of your AVIRA is yours alone.',
  },
  {
    title: 'Zero compromise on finish',
    description:
      'Brushed steel, CNC-engraved teak and woven rope — every surface is finished to a standard you can feel with your hands.',
  },
]

export default function FeatureCards() {
  return (
    <section style={{ backgroundColor: 'rgba(13,13,13,0.93)', paddingTop: '80px', paddingBottom: '80px' }}>
      <style>{`
        .fc-card {
          border: 1px solid rgba(223,225,226,0.08);
          transition: border-color 0.2s;
        }
        .fc-card:hover {
          border-color: rgba(223,225,226,0.2);
        }
      `}</style>

      <div className="no-scrollbar" style={{ width: '100%', overflowX: 'auto' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '16px',
            paddingLeft: '80px',
            paddingRight: '80px',
            width: 'fit-content',
          }}
          className="max-md:!pl-6 max-md:!pr-6"
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="fc-card max-md:!w-[300px]"
              style={{
                width: '380px',
                minHeight: '280px',
                flexShrink: 0,
                backgroundColor: '#1e2022',
                borderRadius: '2px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              {/* Icon dash */}
              <span style={{
                width: '32px',
                height: '2px',
                backgroundColor: 'rgba(223,225,226,0.3)',
                marginBottom: '8px',
                display: 'block',
              }} />

              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 200,
                  color: '#dfe1e2',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  fontFamily: 'var(--font-sans)',
                  margin: 0,
                }}
                className="max-md:!text-base"
              >
                {card.title}
              </h3>

              <p
                style={{
                  fontSize: '15px',
                  fontWeight: 200,
                  color: 'rgba(223,225,226,0.5)',
                  lineHeight: 1.6,
                  fontFamily: 'var(--font-sans)',
                  margin: 0,
                }}
                className="max-md:!text-sm"
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
