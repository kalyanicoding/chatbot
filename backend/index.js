const express = require('express');
const dotenv = require("dotenv")
const financeController = require("./controller/financeController")
const cors = require("cors")
dotenv.config()

const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port

app.use(cors({
  origin:"https://harmonious-klepon-c81c2f.netlify.app",
  credentials: true,  // Enable sending cookies over HTTP requests
  methods: ["GET", "POST", "PUT", "DELETE"] // Specify allowed HTTP methods for cross-origin requests
})); 
app.use(express.json()); 


app.post('/askedQuestion', financeController.handleChat);


  app.listen(port, () => console.log(`Server listening on port ${port}`));