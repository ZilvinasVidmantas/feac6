const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/categories', (req, res) => {
  res.json([
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
    { id: 4, name: 'Category 4' },
    { id: 5, name: 'Category 5' }
  ])
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
})