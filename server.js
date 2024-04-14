const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the "public" directory (create this directory in your project root)
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.send(
        `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Edgar Tapia Maldonado - Resume</title>
<style>
  body { font-family: Arial, sans-serif; }
  .container { width: 80%; margin: auto; }
  .top-heading { color: rgb(13, 133, 2); }
  h1, h2 { margin: 0; }
  .section { margin-top: 20px; }
  .section-title { font-weight: bold; }
  .skills, .interests { padding-left: 20px; }
  .small-image { max-width: 50px; }
  .person-image { max-width: 150px; }
  .divider { display: block; height: 1px; background: #000; margin: 20px 0; }
  a { color: #0000EE; text-decoration: none; }
  a:hover { text-decoration: underline; }
</style>
</head>
<body>
<div class="container">
  <header>
    <div class="top-heading">
      <h1>Edgar Tapia Maldonado</h1>
      <h2>Student at UCR</h2>
    </div>
    <img class="person-image" src="random-person.jpg" alt="Edgar Tapia">
  </header>

  <hr class="divider">

  <main>
    <section>
      <h2>&#128214; Education</h2>
      <ul>
        <li><strong>B.S. Computer Engineering</strong> - University of California, Riverside <em>(In Progress)</em></li>
        <li><strong>A.A. Biological and Physical Science </strong> - San Bernardino Valley College, San Bernardino <em>(2016 - 2021)</em></li>
      </ul>
    </section>

    <hr class="divider">

    <section>
      <h2>&#128187; Work Experience</h2>
      <ul>
        <li>
          <strong>Information Systems - University of California, Riverside</strong> <em>(2023 - Present)</em>
          <ul>
            <li>IT, Multimedia</li>
            <li>Assist Professors with tech problems in class rooms</li>
          </ul>
        </li>
        <li>
          <strong>Truck Driver</strong> <em>(2017)</em>
          <ul>
            <li>Out of state hauls.</li>
            <li>Delivery of hevy equipment</li>
          </ul>
        </li>
      </ul>
    </section>

    <hr class="divider">

    <section>
      <h2>&#128077; Skills</h2>
      <ul>
        <li>Programming Languages:
          <ul>
            <li>Python</li>
            <li>C++</li>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>C language</li>
          </ul>
        </li>
        <li>Tools/Technologies:
          <ul>
            <li>Mern</li>
            <li>Git</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </li>
      </ul>
    </section>

    <hr class="divider">

    <section>
      <h2>&#128269; Subject Interests</h2>
      <p>Olympic Weight Lifting: Exploring the art and science of Olympic weightlifting, from technique refinement to performance optimization.</p>
      <p>Gardening: Cultivating a green paradise through hands-on gardening techniques, nurturing plants from seed to bloom.</p>
    </section>
  </main>

  <hr class="divider">

  <footer>
    <a href="https://github.com/Etapi017"><img class="small-image" src="github-logo.png" alt="GitHub Logo"></a>
    <a href="https://www.linkedin.com/in/edgar-tapia-92440a2aa/"><img class="small-image" src="linkedin-logo.png" alt="LinkedIn Logo"></a>
  </footer>
</div>
</body>
</html>`);
});

app.get("/admin", (req, res) => {
    res.send("Administration Page");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
