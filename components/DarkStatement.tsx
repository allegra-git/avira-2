const stats = [
  { value: "100%", label: "reclaimed origin" },
  { value: "0", label: "synthetic materials" },
  { value: "Each", label: "piece unique" },
];

export default function DarkStatement() {
  return (
    <section style={{ backgroundColor: "#6E6E68" }}>
      {/* Top two-column text block */}
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "80px 80px 64px 80px",
          display: "grid",
          gridTemplateColumns: "50% 50%",
          gap: "48px",
          alignItems: "start",
        }}
        className="max-md:!grid-cols-1 max-md:!px-6 max-md:!pt-12 max-md:!pb-10"
      >
        {/* Left column */}
        <div>
          <span
            style={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#D3D1C9",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "16px",
              display: "block",
              fontFamily: "var(--font-sans)",
            }}
          >
            EXCEPTIONAL CRAFTSMANSHIP
          </span>
          <h2
            style={{
              fontSize: "60px",
              color: "#F7F3E8",
              textTransform: "uppercase",
              lineHeight: 1.0,
              fontFamily: "var(--font-sans)",
              margin: 0,
            }}
            className="max-md:!text-[30px]"
          >
            <span style={{ fontWeight: 400, display: "block" }}>THE</span>
            <span style={{ fontWeight: 400, display: "block" }}>PURPOSEFUL</span>
            <span style={{ fontWeight: 400, display: "block" }}>WAY TO MAKE</span>
            <span style={{ fontWeight: 400, display: "block" }}>OBJECTS</span>
          </h2>
        </div>

        {/* Right column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: "20px",
              color: "#F7F3E8",
              lineHeight: 1.6,
              maxWidth: "480px",
              fontFamily: "var(--font-sans)",
              margin: 0,
            }}
            className="max-md:!text-base"
          >
            AVIRA goes beyond aesthetics. Every piece combines hand-craftsmanship
            with salvaged ocean materials. From sourcing to final finish, each
            object is built without compromise — to be used, not displayed.
          </p>

          {/* Button row */}
          <div style={{ display: "flex", gap: "12px" }}>
            <button
              type="button"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #85837C",
                color: "#85837C",
                padding: "14px 20px",
                borderRadius: "4px",
                fontSize: "16px",
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
              }}
            >
              View materials
            </button>
            <button
              type="button"
              style={{
                backgroundColor: "#E93A37",
                color: "#FBF9F4",
                padding: "14px 20px",
                borderRadius: "4px",
                fontSize: "16px",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
              }}
            >
              View collection
            </button>
          </div>

          {/* Stats block */}
          <div style={{ marginTop: "32px" }}>
            <span
              style={{
                fontSize: "14px",
                color: "#ADAAA2",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "12px",
                display: "block",
                fontFamily: "var(--font-sans)",
              }}
            >
              WITH AVIRA YOUR HOME CAN
            </span>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
              }}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span
                    style={{
                      fontSize: "32px",
                      fontWeight: 700,
                      color: "#F7F3E8",
                      display: "block",
                      fontFamily: "var(--font-sans)",
                    }}
                    className="max-md:!text-2xl"
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#ADAAA2",
                      fontFamily: "var(--font-sans)",
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
          width: "100%",
          height: "700px",
          backgroundColor: "#3a3a36",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#6E6E68",
          fontSize: "14px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          fontFamily: "var(--font-sans)",
        }}
        className="max-md:!h-[300px]"
      >
        WORKSHOP
      </div>
    </section>
  );
}
