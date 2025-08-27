
import Form from "./Form"
import TodoList from "./TodoList"
import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Form todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </>
  );
};

export default Todo;
