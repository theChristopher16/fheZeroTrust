// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const authController = require('./controllers/auth.controller');
// const path = require('path');

// require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

// const app = express();
// app.use(bodyParser.json());

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }).catch(error => {
//     console.error('Error connecting to MongoDB:', error.message);
//   });

// app.post('/api/login', authController.login);

// app.listen(3000, () => {
//   console.log('Server started at port 3000');
// });

const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
app.use(express.json());

// Dummy user database for demonstration purposes
const users = [
  { id: 1, email: 'user1@example.com', password: 'password1' },
  { id: 2, email: 'user2@example.com', password: 'password2' },
];

// Route to handle login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Find the user with the matching email
  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(400).send('Email or password is incorrect');
  }

  // Compare the provided password with the hashed password in the database
  const isPasswordMatch = bcrypt.compareSync(password, user.password);
  if (!isPasswordMatch) {
    return res.status(400).send('Email or password is incorrect');
  }

  // Generate a JSON Web Token (JWT) for the user
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.send({ token });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
