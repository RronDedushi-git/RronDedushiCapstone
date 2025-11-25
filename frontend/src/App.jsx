import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import StepGenerator from "./pages/StepGenerator";
import About from "./pages/About";
import AddCategory from "./pages/AddCategory";
import ManageSteps from "./pages/ManageSteps";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:categoryId" element={<StepGenerator />} />
        <Route
          path="/category/:categoryId/manage"
          element={<ManageSteps />}
        />{" "}
        <Route path="/about" element={<About />} />
        <Route path="/add-category" element={<AddCategory />} />
        <Route path="/manage-steps/:categoryId" element={<ManageSteps />} />
      </Routes>
    </>
  );
}
