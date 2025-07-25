require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT;


const DB = require('./config/db')
// Middleware (optional)
app.use(express.json());




// Routes
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  DB();
});
