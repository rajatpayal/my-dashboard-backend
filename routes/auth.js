const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Use an environment variable for the secret key
const SECRET_KEY = process.env.SECRET_KEY || 'your_secret_key'; 

// Hardcoded users for demonstration purposes
const users = [
  { id: 1, username: 'user1', password: bcrypt.hashSync('password1', 8) },
  { id: 2, username: 'user2', password: bcrypt.hashSync('password2', 8) }
];

// Login endpoint
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find user with matching username
  const user = users.find(u => u.username === username);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Check if password is correct
  const passwordIsValid = bcrypt.compareSync(password, user.password);

  if (!passwordIsValid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Create a token
  const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });

  res.status(200).json({ token });
});

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];
  
  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to authenticate token' });
    }
    req.userId = decoded.id;
    next();
  });
};

// Example of a protected route
router.get('/protected', verifyToken, (req, res) => {
  res.status(200).json({ message: 'This is a protected route', userId: req.userId });
});

module.exports = router;
