import style from "./todoitem.module.css";

const Todoitem = ({ item, todos, setTodos }) => {
  function handleDelete(item) {
    console.log("item was deleted..!", item);
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name){
    const newArray = todos.map((todo)=>
      todo.name === name ? {...todo, done: !todo.done} : todo
    )
    setTodos(newArray)
  }

  const className = item.done ? style.completed : "";
  return (
    <>
      <div className={style.item}>
        <div className={style.itemName}>
          <span className={className} onClick={()=>handleClick(item.name)}>{item.name}</span>
          
          <span>
            <button
              onClick={() => handleDelete(item)}
              className={style.deleteButton}
            >
              X
            </button>
          </span>
        </div>
        <hr className={style.line} />
      </div>
    </>
  );
};

export default Todoitem;
