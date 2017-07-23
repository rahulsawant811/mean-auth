const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
  console.log('Connected to DB '+ config.database);
});

mongoose.connection.on('error', (err) => {
  console.log('DB Error occured '+ err);
});

const app = express();

const port = 3000;

const users = require('./routes/users');

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

app.get('/', (req, res) => {
  res.send('Test !!!');
});

app.listen(port, () => {
  console.log('Server running on port '+ port);
});
