import express from "express";
import { Category } from "../models/Category.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find().sort({ name: 1 });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
