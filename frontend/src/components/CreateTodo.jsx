import axios from "axios";
import { useState } from "react";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="description"
        name=""
        id=""
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          axios.post("http://localhost:3000/todo", {
            title: title,
            description: description,
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default CreateTodo;
