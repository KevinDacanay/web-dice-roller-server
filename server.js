const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (the API test page)
app.use(express.static(path.join(__dirname, 'public')));

// --- RESTful APIs ---

// 1. Wake Up API
// Used to wake up the server asynchronously
app.get('/api/wakeup', cors(), (req, res) => {
    res.json({ status: 'awake', message: 'Server is ready.' });
});

// 2. Roll Dice API
// Returns a random number based on sides (default 20)
app.get('/api/roll', cors(), (req, res) => {
    const sides = parseInt(req.query.sides) || 20;
    const result = Math.floor(Math.random() * sides) + 1;
    res.json({ sides: sides, result: result });
});

// 3. CORS Failure API
// This endpoint intentionally does NOT have CORS enabled to demonstrate failure
app.get('/api/cors-fail', (req, res) => {
    res.json({ message: 'If you see this in the browser console from a different origin, CORS failed to block it.' });
});

app.listen(port, () => {
    console.log(`Dice Roller API listening on port ${port}`);
});