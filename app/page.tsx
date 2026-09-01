export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>NEXUS Engineering</h1>

      <p>
        AI-powered engineering workspace for designing, analyzing,
        and optimizing physical systems.
      </p>

      <button
        onClick={() => alert("Engineering AI activated!")}
        style={{
          padding: "10px 18px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Start Engineering
      </button>
    </main>
  );
}