import express from "express";
import cors from "cors";
import db from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

// GET all users
app.get("/api/users", async (req, res) => {
  const result = await db.query("SELECT * FROM users");
  res.json(result.rows);
});

// POST new user
app.post("/api/users", async (req, res) => {
  const { name } = req.body;
  const result = await db.query(
    "INSERT INTO users (name) VALUES ($1) RETURNING *",
    [name]
  );
  res.json(result.rows[0]);
});

app.listen(5050, () => console.log("Server running on port 5050"));