export default function ProductShowcase() {
  return (
    <section
      style={{
        backgroundColor: "#6E6E68",
        height: "885px",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
      className="max-md:!h-[400px]"
    >
      {/* Centered product placeholder */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "500px",
          backgroundColor: "#5A5A56",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#C8C6C0",
          fontSize: "14px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
        }}
        className="max-md:!w-[280px] max-md:!h-[280px]"
      >
        AVIRA TRAY
      </div>

      {/* Spec card */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          right: "40px",
          backgroundColor: "#F7F3E8",
          padding: "20px 24px",
          borderRadius: "4px",
          width: "200px",
        }}
        className="max-md:!bottom-4 max-md:!right-4 max-md:!p-3"
      >
        {/* MATERIAL */}
        <p
          style={{
            fontSize: "11px",
            fontWeight: 400,
            color: "#85837C",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontFamily: "var(--font-sans)",
            marginBottom: "4px",
          }}
        >
          MATERIAL
        </p>
        <p
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "#000000",
            fontFamily: "var(--font-sans)",
            marginBottom: "16px",
          }}
        >
          316L MARINE STEEL
        </p>

        {/* DIMENSIONS */}
        <p
          style={{
            fontSize: "11px",
            fontWeight: 400,
            color: "#85837C",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontFamily: "var(--font-sans)",
            marginBottom: "4px",
          }}
        >
          DIMENSIONS
        </p>
        <p
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "#000000",
            fontFamily: "var(--font-sans)",
            marginBottom: "16px",
          }}
        >
          320 × 240 mm
        </p>

        {/* FINISH */}
        <p
          style={{
            fontSize: "11px",
            fontWeight: 400,
            color: "#85837C",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontFamily: "var(--font-sans)",
            marginBottom: "4px",
          }}
        >
          FINISH
        </p>
        <p
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "#000000",
            fontFamily: "var(--font-sans)",
          }}
        >
          BRUSHED
        </p>
      </div>
    </section>
  );
}
