const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Input validation: Check if userId is a valid number
  if (isNaN(userId) || parseInt(userId) <= 0) {
    return res.status(400).send('Invalid user ID');
  }
  // ... database query to fetch user with userId ...
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});