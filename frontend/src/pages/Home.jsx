import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1 className="brand-logo">KZN</h1>

      <h2 style={{ fontWeight: 400 }}>Become 1% Better Today</h2>

      <p className="subtitle" style={{ fontStyle: "italic", color: "#555" }}>
        Small Steps, Big Moves.
      </p>

      <p style={{ marginBottom: "30px", color: "#444" }}>
        Where do you want to grow 1% today?
      </p>

      <Link to="/categories">
        <button className="button">Choose a Category</button>
      </Link>
    </div>
  );
}
