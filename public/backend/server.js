import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getAIAnswer } from "./ai.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Ask route
app.post("/ask", async (req, res) => {
  try {
    const { question } = req.body;

    if (!question || question.trim() === "") {
      return res.status(400).json({ error: "Question is required" });
    }

    const answer = await getAIAnswer(question);
    res.json({ answer });

  } catch (err) {
    console.error("Error in /ask route:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Start server
app.listen(process.env.PORT, "127.0.0.1" , () => {
  console.log("Server running on port:", process.env.PORT);
});

console.log("PORT:", process.env.PORT);
console.log("KEY:", process.env.GEMINI_API_KEY);
