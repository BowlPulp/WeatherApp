const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const dbPath = './db.json';

// Endpoint to handle user signup
app.post('/signup', (req, res) => {
  const { email, password } = req.body;

  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to read database.' });
    }

    let users = JSON.parse(data || '[]');
    const userExists = users.some(user => user.email === email);
    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    users.push({ email, password });

    fs.writeFile(dbPath, JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to write to database.' });
      }

      res.status(200).json({ message: 'User registered successfully.' });
    });
  });
});

// Endpoint to handle user login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to read database.' });
    }

    let users = JSON.parse(data || '[]');

    // Check if user exists and the password matches
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      res.status(200).json({ message: 'Login successful.' });
    } else {
      res.status(400).json({ error: 'Invalid email or password.' });
    }
  });
});

// Start the server
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
