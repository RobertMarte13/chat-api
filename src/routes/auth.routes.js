import { Router } from "express";
import pool from "../db.js";

const router = Router()

// registro
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const auth = await pool.query("SELECT * FROM Auth");
  const users = auth[0];
  const validationName = users.find((user) => user.username === username);

  if (!!!validationName) {
    const [rows] = await pool.query(
      "INSERT INTO Auth(username, password) VALUES (?, ?)",
      [username, password]
    );

    res.json({
      message: "Registration successful",
    });
  } else {
    res.status(409).json({ message: "The username is already taken" });
  }
});

// Login
router.get("/login", async (req, res) => {
  const { username, password } = req.body;

  const auth = await pool.query("SELECT * FROM Auth");
  const users = auth[0];

  const validationName = users.find((user) => user.username === username);
  const validationPass = users.find((user) => user.password === password);

  if (validationName && validationPass) {
    res.json({
      pin: validationName.id,
      isValidation: true,
      user: validationName.username,
    });
  } else {
    res.status(404).json({ message: "The username or password is incorrect" });
  }
});

export default router;
