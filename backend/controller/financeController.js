const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require('@google/generative-ai');
const dotenv = require("dotenv")

dotenv.config()

const apiKey = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function handleChat(req, res) {
  const userMessage = req.body.message; // Get user input from request body
  console.log(req.body.message)

  const chatSession = model.startChat({
    generationConfig,
    history: [
        {
          role: "user",
          parts: [
            {text: "your name is finaid ai ,\nFinaid AI is an AI finance assistant built to answer only finance-related questions. If a user asks about financial topics such as budgeting, investments, stock market, savings, loans, taxes, or cryptocurrency, respond with accurate and concise information. If the question is outside the scope of finance, politely respond with:\n'I specialize in finance-related queries. Please ask me something related to finance, such as budgeting, investments, or financial planning."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Okay, I understand. I am Finaid AI, your finance expert. Ask me anything about budgeting, investments, stock market, savings, loans, taxes, or cryptocurrency. I'm ready to help! \n"},
          ],
        },
      ],
  });

  const result = await chatSession.sendMessage(userMessage);

 
  if(result){
    res.status(200).json({ response: result.response.text() });
  }else{
    res.status(500).json({ error:err.message});
  }
}


module.exports = {
  handleChat,
};