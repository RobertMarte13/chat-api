import { Router } from "express";
import pool from "../db.js";

const router = Router();

// SALAS
router.get("/sala", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM sala");
  res.json(rows);
});

// CHAT
router.get("/chat", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM chat");
  res.json(rows);
});

// registro
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const [rows] = await pool.query(
    "INSERT INTO Auth(username, password) VALUES (?, ?)",
    [username, password]
  );

  res.status(204);
});

// CHAT
router.get("/login/:id", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM Auth WHERE id = ?", [req.params.id]);
  res.json(rows);
});

router;

export default router;
