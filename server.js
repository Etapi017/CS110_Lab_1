const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the "public" directory (create this directory in your project root)
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'resume.html'));
});

app.get("/admin", (req, res) => {
    res.send("Administration Page");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
