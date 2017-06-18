const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.post('/register', (req, res, next) => {
  res.send('Register');
});

router.post('/authenticate', (req, res, next) => {
  res.send('Register');
});

router.get('/profile', (req, res, next) => {
  res.send('Register');
});

module.exports = router;
