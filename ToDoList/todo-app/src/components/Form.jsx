import { useState } from "react";
import style from "./form.module.css";

const Form = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // stop refresh after the submit
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <>
      <form className={style.todoform} action="" onSubmit={handleSubmit}>
        <div className={style.inputContainer}>
          <input
            className={style.modernInput}
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            type="text"
            placeholder="Enter todo items.."
          />
          <button className={style.modernButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
