import { Router } from "express";
import pool from "../db.js";

const router = Router();

// SALAS
router.get("/api/sala", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM sala");
  res.json(rows);
});

// CREATE SALA
router.post("/api/sala", async (req, res) => {
  const { sala } = req.body;
  const [rows] = await pool.query("INSERT INTO sala(sala) VALUES (?)", [
    sala,
  ]);

  res.json(rows);
});

// GET CHAT
router.get("/api/chat", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM chat");

  res.json(rows);
});

// CREATE CHAT
router.post("/api/chat", async (req, res) => {
  const { chat } = req.body;
  const [rows] = await pool.query("INSERT INTO datachat(chat) VALUES (?)", [
    chat,
  ]);

  res.json(rows);
});

export default router;
