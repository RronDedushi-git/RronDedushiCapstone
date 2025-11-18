import express from "express";
import { Step } from "../models/Step.js";
import mongoose from "mongoose";

const router = express.Router();

// GET random step:
router.get("/random", async (req, res) => {
  const { categoryId } = req.query;

  if (!categoryId) {
    return res.status(400).json({ error: "categoryId required" });
  }

  try {
    const result = await Step.aggregate([
      { $match: { categoryId: new mongoose.Types.ObjectId(categoryId) } },
      { $sample: { size: 1 } },
    ]);

    res.json(result[0] || null);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all steps for a category
router.get("/", async (req, res) => {
  const { categoryId } = req.query;

  try {
    const steps = await Step.find({ categoryId }).sort({ createdAt: 1 });
    res.json(steps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create new step
router.post("/", async (req, res) => {
  const { categoryId, text } = req.body;

  try {
    const created = await Step.create({ categoryId, text });
    res.status(201).json(created);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE a step
router.put("/:id", async (req, res) => {
  const { text } = req.body;

  try {
    const updated = await Step.findByIdAndUpdate(
      req.params.id,
      { text },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE a step
router.delete("/:id", async (req, res) => {
  try {
    await Step.findByIdAndDelete(req.params.id);
    res.json({ message: "Step deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
