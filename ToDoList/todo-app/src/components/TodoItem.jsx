import style from "./todoitem.module.css";

const Todoitem = ({ item, todos, setTodos }) => {
  function handleDelete(item) {
    console.log("item was deleted..!", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  return (
    <>
      <div className={style.item}>
        <div className={style.itemName}>
          {item.name}
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
