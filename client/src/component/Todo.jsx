import classes from './Todo.module.css'
import { MdEditNote } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

export default function Todo() {
  return (
    <div className={classes.todo}>
        <h2> My Todo list</h2>
        <div className={classes.todoItems}>
            <div className={classes.todoItem}>
            <p>Complete Bca projects</p>
            <div>
            <MdEditNote className={classes.edit}/>
            <MdDeleteForever className={classes.delete}/>
            </div>
            </div>
        </div>
    </div>
  )
}
