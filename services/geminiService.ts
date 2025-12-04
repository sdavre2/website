import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini client
// Note: In a real production environment, API calls should often go through a backend proxy 
// to protect the API key, but for this client-side demo, we use process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the "Cloud Smart Assistant", a helpful and knowledgeable AI agent for the company "Cloud Smart Service".
Your goal is to assist potential clients by answering questions about cloud computing, digital transformation, AI integration, and DevOps.
Keep your answers professional, concise, and business-oriented. 
If asked about services, mention: 
- Oracle E-Business Suite (EBS) Support
- Database Management (MSSQL, MySQL, PostgreSQL)
- Public Cloud Migration (AWS, Azure, GCP)
- AI Solutions & Cybersecurity
- Managed DevOps

Do not make up pricing, but encourage users to use the contact form for quotes.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    const response = await ai.models.generateContent({
      model: model,
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to communicate with the AI assistant.");
  }
};