const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

const users = [];

const register = (req, res) => {
  const { username, password } = req.body;

  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  users.push({ username, password: hashedPassword });

  const token = jwt.sign({ username }, 'secretKey', { expiresIn: '1h' });

  res.cookie('token', token, { httpOnly: true });
  res.status(201).json({ message: 'User registered successfully' });
};

const login = (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ username }, 'secretKey', { expiresIn: '1h' });

  res.cookie('token', token, { httpOnly: true });
  res.status(200).json({ message: 'Login successful' });
};

const refresh = (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  // Implement token refresh logic

  res.status(200).json({ message: 'Token refreshed successfully' });
};

const logout = (req, res) => {
  // Enhance /logout to invalidate refresh tokens
  res.clearCookie('token');
  res.status(200).json({ message: 'Logout successful' });
};

module.exports = { register, login, refresh, logout };
