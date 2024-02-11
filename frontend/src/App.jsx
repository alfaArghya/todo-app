import { useEffect, useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:3000/todo").then(async (res) => {
    //   const data = await res.json();
    //   setTodos(data.todos);
    // });
    axios.get("http://localhost:3000/todo").then(async (res) => {
      const data = await res.data;
      setTodos(data.todos);
    });
  }, []);

  return (
    <>
      <div>
        <h3>@todo</h3>
        <CreateTodo />
        <hr />
        <Todos todos={todos} />
      </div>
    </>
  );
}

export default App;
