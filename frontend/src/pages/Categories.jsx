import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useApi from "../hooks/useApi";

import {
  Leaf,
  Dumbbell,
  Heart,
  Bubbles,
  ChartNoAxesCombined,
  Settings,
  Footprints,
} from "lucide-react";

const iconMap = {
  leaf: Leaf,
  dumbbell: Dumbbell,
  heart: Heart,
  bubbles: Bubbles,
  "chart-no-axes-combined": ChartNoAxesCombined,
  footprints: Footprints, // DEFAULT NEW ICON
};

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const api = useApi();

  useEffect(() => {
    api.get("/categories").then(setCategories);
  }, []);

  return (
    <div className="page-container">
      <h1>Choose a Category</h1>

      <ul className="category-list">
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon] || Footprints;

          return (
            <li key={cat._id} className="category-wrapper">
              <div className="category-item">
                <Link
                  to={`/category/${cat._id}`}
                  className="category-main-link"
                >
                  <Icon size={24} />
                  <span>{cat.name}</span>
                </Link>

                <Link
                  to={`/category/${cat._id}/manage`}
                  className="settings-btn"
                >
                  <Settings size={20} />
                </Link>
              </div>
            </li>
          );
        })}
      </ul>

      <div style={{ marginTop: 40, textAlign: "center" }}>
        <Link to="/add-category" className="button add-category-btn">
          + Add Category
        </Link>
      </div>
    </div>
  );
}
