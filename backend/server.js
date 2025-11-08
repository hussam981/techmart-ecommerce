const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Allow frontend to access
app.use(express.json());

// Load products from JSON file
const products = JSON.parse(fs.readFileSync('./products.json', 'utf-8'));

// API endpoint to get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// API endpoint to get a single product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});