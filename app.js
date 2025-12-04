const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello from Express.js!");
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
