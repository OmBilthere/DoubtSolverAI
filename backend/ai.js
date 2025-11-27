import axios from 'axios';
import dotenv from 'dotenv';
import { config } from 'dotenv';
config({ path: './.env' });
dotenv.config();

const GROQ_API_KEY = process.env.GROQ_API_KEY;
console.log("Groq Key:", GROQ_API_KEY);

export async function getAIAnswer(question) {
  try {
    const response = await axios.post(
      `https://api.groq.com/openai/v1/chat/completions`, // Direct URL
      {
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "user",
            content: question
          }
        ],
        stream: false,
        max_tokens: 2048,
        temperature: 0.7
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GROQ_API_KEY}`
        }
      }
    );

    return response.data.choices[0].message.content;
    
  } catch (err) {
    console.error("Groq AI Error:", err.response?.data || err.message);
    return "AI service temporarily unavailable.";
  }
}