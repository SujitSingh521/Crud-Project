const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());  // Enable CORS
app.use(express.json()); // To parse JSON bodies

// Sample route
app.post('/api/data', (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).json({ error: 'No data received' });
  }
  // Simulate server processing
  res.status(200).json({ message: 'Data received successfully', receivedData: data });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
