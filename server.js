const express = require('express');
const path = require('path');

const app = express();
const PORT = parseInt(process.env.PORT) || 3000;

console.log('Starting server, PORT env:', process.env.PORT);
console.log('Listening on port:', PORT);

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server live at http://0.0.0.0:${PORT}`);
});
