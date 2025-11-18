import { Routes, Route } from "react-router-dom";
import Categories from "./pages/Categories.jsx";
import StepGenerator from "./pages/StepGenerator.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Categories />} />
      <Route path="/generate/:id" element={<StepGenerator />} />
    </Routes>
  );
}
