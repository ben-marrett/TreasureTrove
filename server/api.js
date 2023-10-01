const express = require('express');

// Sample data
const treasureData = require('./treasure.json');

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

// API endpoints
router.get('/items', (req, res) => {
  res.json(treasureData)
})

router.get('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id)

  const item = treasureData.find((item) => item.id === itemId)

  if (!item) {
    return res.status(404).json({ message: 'Item not found' })
  }

  res.json(item)
})

// POST endpoint to create a new item
router.post('/items', (req, res) => {
  // Here, you can handle creating a new item based on the request body
  // Replace this with your actual logic
  const newItem = {
    id: treasureData.length + 1, // Generate a new ID (replace this logic as needed)
    ...req.body, // Copy data from the request body
  };

  treasureData.push(newItem);

  res.status(201).json(newItem);
});

// PUT endpoint to update an item by ID
router.put('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);

  // Find the index of the item with the specified ID
  const itemIndex = treasureData.findIndex(item => item.id === itemId);

  if (itemIndex === -1) {
    return res.status(404).json({ message: 'Item not found' });
  }

  // Update the item with new data from the request body
  treasureData[itemIndex] = {
    ...treasureData[itemIndex], // Keep existing properties
    ...req.body, // Update with new data
  };

  res.json(treasureData[itemIndex]);
});

// DELETE endpoint to delete an item by ID
router.delete('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);

  // Find the index of the item with the specified ID
  const itemIndex = treasureData.findIndex(item => item.id === itemId);

  if (itemIndex === -1) {
    return res.status(404).json({ message: 'Item not found' });
  }

  // Remove the item from the array
  treasureData.splice(itemIndex, 1);

  res.json({ message: 'Item deleted' });
});

router.get('/movies', (req, res) => {
  const movies = treasureData.filter((item) => item.type === 'movie')
  res.json(movies)
})

router.get('/books', (req, res) => {
  const books = treasureData.filter((item) => item.type === 'book')
  res.json(books)
})

module.exports = router;




