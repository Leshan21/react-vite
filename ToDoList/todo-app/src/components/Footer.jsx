import style from './footer.module.css'

export default function Footer({completedTodos, totleTodos}){
    return(
        <>  
            <div className={style.footer}>
                <span className={style.item}>completed Todos: {completedTodos}</span>
                <span >Totle Todos: {totleTodos}</span>
            </div>
        </>
    );
}