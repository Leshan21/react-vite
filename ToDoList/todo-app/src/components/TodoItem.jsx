import style from "./todoitem.module.css";

const Todoitem = ({ item, todos, setTodos }) => {
  function handleDelete(item) {
    console.log("item was deleted..!", item);
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name){
    console.log("item text click", name)
  }
  return (
    <>
      <div className={style.item}>
        <div className={style.itemName}>
          <span onClick={()=>handleClick(item.name)}>{item.name}</span>
          
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
