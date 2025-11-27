import { GoogleGenerativeAI } from "@google/generative-ai";

// Gemini initialize
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash"
});

// Function to generate AI answer
export async function getAIAnswer(question) {
  try {
    const result = await model.generateContent(question);
    return result.response.text();
  } catch (err) {
    console.error("AI Error:", err);
    return "Sorry, something went wrong with AI.";
  }
}
