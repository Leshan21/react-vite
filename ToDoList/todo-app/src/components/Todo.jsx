import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");

  function handleSubmit(e){
    e.preventDefault(); // stop refresh after the submit
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text" />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default Todo;
