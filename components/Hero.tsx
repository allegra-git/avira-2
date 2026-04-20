export default function Hero() {
  return (
    <section
      style={{
        backgroundColor: "#F7F3E8",
        paddingTop: "80px",
        paddingBottom: 0,
      }}
    >
      {/* Inline styles for button hover states */}
      <style>{`
        .hero-btn-primary {
          background-color: #E93A37;
          color: #000000;
          padding: 14px 20px;
          border-radius: 4px;
          font-size: 16px;
          height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: opacity 0.2s;
          box-sizing: border-box;
        }
        .hero-btn-primary:hover { opacity: 0.85; }

        .hero-btn-ghost {
          background-color: transparent;
          color: #000000;
          border: 1px solid #85837C;
          padding: 14px 20px;
          border-radius: 4px;
          font-size: 16px;
          height: 48px;
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
          display: "grid",
          gridTemplateColumns: "55fr 45fr",
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "40px 80px 0 80px",
          alignItems: "center",
        }}
        className="max-md:!grid-cols-1 max-md:!px-6"
      >
        {/* Left column — title */}
        <div>
          <h1
            style={{
              fontSize: "60px",
              color: "#E93A37",
              textTransform: "uppercase",
              lineHeight: 1.0,
              fontFamily: "var(--font-sans)",
            }}
            className="max-md:!text-[36px]"
          >
            <span style={{ fontWeight: 400, display: "block" }}>THE</span>
            <span style={{ fontWeight: 700, display: "block" }}>LUXURY</span>
            <span style={{ fontWeight: 700, display: "block" }}>TABLEWARE</span>
            <span style={{ fontWeight: 400, display: "block" }}>FOR MODERN</span>
            <span style={{ fontWeight: 400, display: "block" }}>SPACES</span>
          </h1>
        </div>

        {/* Right column — subtitle + CTAs */}
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
              fontWeight: 400,
              color: "#85837C",
              lineHeight: 1.5,
              maxWidth: "400px",
            }}
          >
            Each piece handcrafted from reclaimed yacht materials — teak, carbon
            composite, and 316L marine-grade stainless steel.
          </p>

          <div
            style={{ display: "flex", flexDirection: "row", gap: "12px" }}
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
  );
}
