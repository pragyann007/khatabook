const express = require('express');
const app = express();

// Set up EJS as the view engine
app.set("view engine", "ejs");

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" folder
app.use(express.static('public'));

// Define a route for the homepage
app.get('/', (req, res) => {
    try {
        res.render('index'); 
    } catch (err) {
        res.send("Something went wrong");
    }
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
