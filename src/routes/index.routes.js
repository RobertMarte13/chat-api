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
  const { sala, sala_id } = req.body;
  
  const data = await pool.query("SELECT * FROM sala");

  const objets = data[0];

  const validation = objets.find((res) => res.sala_id === sala_id);
  console.log(validation);

  if (validation === undefined) {
    const [rows] = await pool.query(
      "INSERT INTO sala(sala, sala_id) VALUES (?, ?)",
      [sala, sala_id]
    );
    res.json(rows);
  } else {
    res.status(404).json({ message: "Try another name or id" });
  }
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
