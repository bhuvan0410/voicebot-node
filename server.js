import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are Bhuvan, a warm, witty, grounded Indian engineer. Respond casually, like you're chatting with a friend. Use relatable desi tone, but stay intelligent and thoughtful.",
          },
          {
            role: "user",
            content: message,
          },
        ],
      }),
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "No response";
    res.json({ reply });
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ reply: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
