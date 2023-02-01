const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authController = require('./controllers/auth.controller');

const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.post('/api/login', authController.login);

app.listen(3000, () => {
  console.log('Server started at port 3000');
});
