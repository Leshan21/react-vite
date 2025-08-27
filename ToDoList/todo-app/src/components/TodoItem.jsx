import style from './todoitem.module.css'

const Todoitem = ({item}) => {
  return (
    <>
        <div className={style.item}>
          <div className={style.itemName}>{item}
          <span>
            <button className={style.deleteButton}>X</button>
          </span>
          </div>
          <hr className={style.line} />
        </div>
    </>
  )
}

export default Todoitem