import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3001;

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../../frontend/dist')));

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Catch-all: serve index.html for any other route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
