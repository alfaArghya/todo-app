const express = require("express");
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(`<h3>Server is working<h3/>`);
});

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  // put it in mongodb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo created",
  });
});

app.get("/todo", async (req, res) => {
  const todos = await todo.find({});
  res.status(200).json({ todos });
});

app.put("/completed", async (req, res) => {
  const createPayLoad = req.body;
  const parsePayLoad = updateTodo.safeParse(createPayLoad);
  if (!parsePayLoad.success) {
    res.status(411).json({
      msg: "You sent the wrong input",
    });
    return;
  }

  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "todo marked as completed",
  });
});

app.listen(port, () => {
  console.log(`I am listening at http://localhost:${port}`);
});
