const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`<h3>Server is working<h3/>`);
});

app.listen(port, () => {
  console.log(`I am listening at http://localhost:${port}`);
});
