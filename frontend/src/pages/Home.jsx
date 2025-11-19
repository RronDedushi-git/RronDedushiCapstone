import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-logo">KZN</h1>

      <h2 className="home-title">Become 1% Better Today</h2>

      <p className="home-subtitle">Small Steps, Big Moves.</p>

      <p className="home-question">Where do you want to grow 1% today?</p>

      <Link to="/categories">
        <button className="button home-button">Choose a Category</button>
      </Link>
    </div>
  );
}
