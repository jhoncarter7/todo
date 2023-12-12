import { useEffect, useState } from "react";
import classes from "./Todo.module.css";
import { MdEditNote } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Todo() {
  const [userTodos, setUsertodos] = useState([])
  const {currentUser} = useSelector((state) => state.user)
 
  useEffect(() => {
    const fetchTodos = async ()=>{
      try {
        const res = await fetch(`/api/todo/getTodos/${currentUser.uid}`)
        const data = await res.json()
        if(data.success === false){
          console.log(data.message)
          return;
        }
        setUsertodos(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchTodos()
  },[currentUser.uid])
 
  return (
    <div className={classes.todo}>
      <h2> My Todo list</h2>
      <div className={classes.todoItems}>
        {
        userTodos && userTodos.map((todo)=> (
            <div className={classes.todoItem} key={todo._id}>
            <p>{todo.title}</p>
            <div>
              <Link to={`/editTodo/${todo._id}`}>
              <MdEditNote className={classes.edit} />
              </Link>
              
              <MdDeleteForever className={classes.delete} />
            </div>
          </div>
          ))
        }
      
      </div>
      <Link to={"/addTodo"}>
        <div className={classes.addTodo}>add new Todo</div>
      </Link>
    </div>
  );
}
