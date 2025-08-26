import { useState } from "react";

const Form = ({todos, setTodos}) => {
  const [todo, setTodo] = useState("");


  function handleSubmit(e) {
    e.preventDefault(); // stop refresh after the submit
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default Form;
