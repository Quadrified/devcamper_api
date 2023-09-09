const express = require('express');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/api/v1/bootcamps', (req, res) => {
  res
    .status(200)
    .json({ success: true, error: null, msg: 'Show all bootcamps' });
});

app.get('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({
    success: true,
    error: null,
    msg: `Showing bootcamps ${req.params.id}`,
  });
});

app.post('/api/v1/bootcamps', (req, res) => {
  res
    .status(200)
    .json({ success: true, error: null, msg: 'Create new bootcamps' });
});

app.put('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({
    success: true,
    error: null,
    msg: `Update bootcamps ${req.params.id}`,
  });
});

app.delete('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({
    success: true,
    error: null,
    msg: `Delete bootcamps ${req.params.id}`,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
