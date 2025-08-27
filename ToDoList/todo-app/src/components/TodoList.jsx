import TodoItem from "./TodoItem";
import style from './todolist.module.css'

const TodoList = ({todos}) => {
  return (
    <>
      <div className={style.list}>
        {todos.map((item) => (
          <TodoItem key={item} item={item} />
        ))}
      </div>
    </>
  );
};

export default TodoList;
