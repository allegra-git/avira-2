const materials = [
  { label: "TEAK DECK PLANKING", backgroundColor: "#8B6914" },
  { label: "CARBON COMPOSITE", backgroundColor: "#1a1a1a" },
  { label: "316L MARINE STEEL", backgroundColor: "#7e8285" },
  { label: "YACHT RIGGING ROPE", backgroundColor: "#C4A35A" },
];

export default function ProblemStatement() {
  return (
    <section style={{ backgroundColor: "#F7F3E8", paddingTop: "64px" }}>
      {/* Top text block */}
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 80px 48px 80px",
          display: "grid",
          gridTemplateColumns: "50% 50%",
          gap: "48px",
        }}
        className="max-md:!grid-cols-1 max-md:!px-6"
      >
        {/* Left col — H2 */}
        <h2
          style={{
            fontSize: "32px",
            color: "#E93A37",
            textTransform: "uppercase",
            lineHeight: 1.1,
            fontFamily: "var(--font-sans)",
          }}
          className="max-md:!text-2xl"
        >
          <span style={{ fontWeight: 400, display: "block" }}>THE BEAUTY OF</span>
          <span style={{ fontWeight: 700, display: "block" }}>RECLAIMED</span>
          <span style={{ fontWeight: 700, display: "block" }}>MATERIALS</span>
        </h2>

        {/* Right col — body + link */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <p
            style={{
              fontSize: "20px",
              fontWeight: 400,
              color: "#85837C",
              lineHeight: 1.6,
              fontFamily: "var(--font-sans)",
            }}
          >
            Every AVIRA piece begins with salvage — teak deck planking stripped
            from decommissioned yachts, carbon composite hull off-cuts, and 316L
            marine-grade stainless steel hardware with decades of ocean history.
          </p>

          <p
            style={{
              fontSize: "20px",
              fontWeight: 400,
              color: "#85837C",
              lineHeight: 1.6,
              fontFamily: "var(--font-sans)",
            }}
          >
            Nothing is wasted. Materials that once sailed the world become objects
            of quiet, enduring purpose for the spaces where life is lived.
          </p>

          <a
            href="/mission"
            style={{
              fontSize: "20px",
              color: "#E93A37",
              fontWeight: 400,
              fontFamily: "var(--font-sans)",
            }}
            className="hover:underline"
          >
            Learn about our materials
          </a>
        </div>
      </div>

      {/* Horizontal image strip */}
      <div
        className="no-scrollbar"
        style={{
          width: "100%",
          overflowX: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "16px",
            paddingLeft: "80px",
            paddingBottom: "40px",
            width: "fit-content",
          }}
        >
          {materials.map((mat) => (
            <div
              key={mat.label}
              style={{
                width: "300px",
                flexShrink: 0,
              }}
              className="max-md:!w-[240px]"
            >
              {/* Color block */}
              <div
                style={{
                  height: "240px",
                  backgroundColor: mat.backgroundColor,
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
              {/* Label */}
              <p
                style={{
                  fontSize: "12px",
                  color: "#85837C",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginTop: "8px",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {mat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
