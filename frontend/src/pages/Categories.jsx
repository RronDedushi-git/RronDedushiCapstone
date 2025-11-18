import { useEffect, useState } from "react";
import API from "../hooks/useApi";

export default function Categories() {
  const [categories, setCategories] = useState([]);
}

useEffect(() => {
  API.get("/categories")
    .then((res) => setCategories(res.data))
    .catch((err) => console.log(err));
}, []);
