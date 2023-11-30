const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set the views directory
app.set('views', path.join(__dirname));

// Set EJS as the view engine for Express
app.set('view engine', 'ejs');

// Body parser middleware to handle form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// GET route for the form
app.get('/', (req, res) => {
    // Render the form without a story
    res.render('index', { story: null });
});

app.post('/', (req, res) => {
    const { animal, emotion, action, place } = req.body;
    const story = `The ${emotion} ${animal} ${action} ${place} with excitement.`;
    // Re-render the same page with the story
    res.render('index', { story: story });
});

// Start the server
app.listen(port, () => {
    console.log(`Madlib game listening at http://localhost:${port}`);
});