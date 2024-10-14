// backend/server.js
import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
require('dotenv').config();  // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());  // Enable CORS
app.use(json());  // Parse incoming JSON requests

// Basic route
app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
