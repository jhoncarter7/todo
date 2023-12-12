import { useState } from "react";
import classes from "./FormTodo.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AddTodo() {
  const [task, setTask] = useState();
  const {currentUser} = useSelector((state)=> state.user)
  const navigate = useNavigate();
  const submitHandler = async(e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/todo/createTodo', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
       ...task,
        uid: currentUser.uid,
        })
      })
      const data = await res.json()
      if(data.success === false){
        console.log(data.message)
        return;
      }
      navigate("/");
    } catch (error) {
      console.log(error)
    }
    

  };
  return (
    <div className={classes.addTodo}>
      <h1>add Todo</h1>
      <form onSubmit={submitHandler} className={classes.todoform}>
        <label>Task name</label>
        <input
          type="text"
          id="title"
          onChange={(e) => setTask({[e.target.id]: e.target.value})}
        />
        <button>submit</button>
      </form>
    </div>
  );
}
