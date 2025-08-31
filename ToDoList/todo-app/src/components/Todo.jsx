
import Footer from "./Footer";
import Form from "./Form"
import TodoList from "./TodoList"
import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo)=> todo.done).length
  const totleTodos = todos.length
  return (
    <>
      <Form todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
      <Footer totleTodos = {totleTodos} completedTodos ={completedTodos}/>
    </>
  );
};

export default Todo;
