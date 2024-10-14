// backend/server.js
import express from 'express';
const app = express();
const PORT = process.env.PORT || 5000;

// Basic route
app.get('/', (req, res) => {
  res.send('Backend server is running');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
