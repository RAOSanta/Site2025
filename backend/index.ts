import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.get('/' , (req, res) => {
    res.redirect('http://localhost:5173')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
