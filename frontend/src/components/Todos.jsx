import axios from "axios";

const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <>
          <h3>{todo.title}</h3>
          <h5>{todo.description}</h5>
          <button
            onClick={() => {
              if (!todo.completed) {
                axios.put("http://localhost:3000/completed", {
                  id: todo._id,
                });
              }
            }}
          >
            {todo.completed ? "completed" : "Mark As Done"}
          </button>
          <hr />
        </>
      ))}
    </div>
  );
};

export default Todos;
