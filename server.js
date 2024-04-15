//require function to import necessary modules into the Node.js
const express = require("express");//Express framework to create the server
const path = require("path");//Path module for file paths

const app = express();//Creating Express application

//Serves static files from the "public" directory (folder)
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page ("/")
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'resume.html'));
});

// Route for the admin page ("/admin")
app.get("/admin", (req, res) => {
    res.send("Administration Page");
});

// Starts the server on port 3000
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
