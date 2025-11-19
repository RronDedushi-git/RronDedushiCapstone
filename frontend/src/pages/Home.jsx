export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      {/* Logo */}
      <h1
        style={{
          fontSize: "40px",
          fontWeight: 100, // thin
        }}
      >
        KZN
      </h1>

      {/* Headline */}
      <h2
        style={{
          fontSize: "28px",
          marginTop: "20px",
          fontWeight: 400, // regular
        }}
      >
        Become 1% Better Today
      </h2>

      {/* Tagline */}
      <p
        style={{
          marginTop: "10px",
          fontSize: "16px",
          fontWeight: 300, // light
          fontStyle: "italic", // italic
        }}
      >
        Small Steps, Big Moves.
      </p>

      {/* Sub-heading */}
      <p
        style={{
          marginTop: "10px",
          fontSize: "14px",
          fontWeight: 300,
          color: "#444",
        }}
      >
        Where do you want to grow 1% today?
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "10px 20px",
          backgroundColor: "black",
          color: "white",
          borderRadius: "8px",
          cursor: "pointer",
          border: "none",
          fontSize: "15px",
          fontWeight: 300, // light
          letterSpacing: "0.5px",
        }}
      >
        Choose a Category
      </button>
    </div>
  );
}
