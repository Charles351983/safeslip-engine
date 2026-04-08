export default function HomePage() {
  return (
    <div style={{ background: "black", color: "white", minHeight: "100vh", padding: "24px" }}>
      <h1>SafeSlip Engine</h1>
      <p>Home Page Live</p>
      <a href="/portal" style={{ color: "gold", display: "block", marginTop: "20px" }}>
        Go to Portal
      </a>
      <a href="/member" style={{ color: "gold", display: "block", marginTop: "10px" }}>
        Go to Member Area
      </a>
    </div>
  );
}
