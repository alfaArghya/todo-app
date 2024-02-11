const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h3>Server is working<h3/>`);
});

app.post("/todo", (req, res) => {
  const createPayLoad = req.body;
  const parsePayLoad = createTodo.safeParse(createPayLoad);
  if (!parsePayLoad.success) {
    res.status(411).json({
      msg: "You sent the wrong input",
    });
    return;
  }
});

app.get("/todo", (req, res) => {});

app.put("/completed", (req, res) => {
  const createPayLoad = req.body;
  const parsePayLoad = updateTodo.safeParse(createPayLoad);
  if (!parsePayLoad.success) {
    res.status(411).json({
      msg: "You sent the wrong input",
    });
    return;
  }
});

app.listen(port, () => {
  console.log(`I am listening at http://localhost:${port}`);
});
