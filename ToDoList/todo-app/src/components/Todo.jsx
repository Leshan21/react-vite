import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  return (
    <>
      <form action="">
        <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text" />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default Todo;
