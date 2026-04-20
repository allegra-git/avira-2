const cards = [
  {
    title: "Handcrafted quality, without compromise",
    description:
      "Every piece is built by hand in our workshop. No shortcuts, no production line — only skilled hands and the right materials.",
  },
  {
    title: "Marine-grade durability",
    description:
      "316L stainless steel and teak are built to endure the ocean. They'll outlast anything you ask of them at home.",
  },
  {
    title: "Each piece is unique",
    description:
      "Reclaimed materials mean no two pieces are identical. The grain, texture and patina of your AVIRA is yours alone.",
  },
  {
    title: "Zero compromise on finish",
    description:
      "Brushed steel, CNC-engraved teak and woven rope — every surface is finished to a standard you can feel with your hands.",
  },
];

export default function FeatureCards() {
  return (
    <section style={{ backgroundColor: "#6E6E68", paddingTop: "80px", paddingBottom: "80px" }}>
      <div
        className="no-scrollbar"
        style={{ width: "100%", overflowX: "auto" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
            paddingLeft: "80px",
            paddingRight: "80px",
            width: "fit-content",
          }}
          className="max-md:!pl-6 max-md:!pr-6"
        >
          {cards.map((card) => (
            <div
              key={card.title}
              style={{
                width: "380px",
                minHeight: "280px",
                flexShrink: 0,
                backgroundColor: "#5A5A55",
                borderRadius: "4px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                transition: "transform 0.2s ease",
              }}
              className="hover:!-translate-y-0.5 max-md:!w-[300px]"
            >
              <span
                style={{
                  width: "32px",
                  height: "2px",
                  backgroundColor: "#D3D1C9",
                  marginBottom: "8px",
                  display: "block",
                }}
              />
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#D3D1C9",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontFamily: "var(--font-sans)",
                  margin: 0,
                }}
                className="max-md:!text-base"
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#ADAAA2",
                  lineHeight: 1.5,
                  fontFamily: "var(--font-sans)",
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
  );
}
