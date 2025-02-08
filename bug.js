const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user with userId ...
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});