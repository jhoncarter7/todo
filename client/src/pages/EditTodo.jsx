import { useEffect, useState } from "react";
import classes from "./FormTodo.module.css";
import { useNavigate, useParams } from "react-router-dom";
export default function EditTodo() {
  const [editTask, setEditTask] = useState();
  const params = useParams();
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`/api/todo/updateTodo/${params.id}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...editTask

        })
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
   
  };
  useEffect(() => {
    const edittodo = async () => {
      try {
        const res = await fetch(`/api/todo/getTodo/${params.id}`);
        const data = await res.json();
        if (data.success === false) {
          console.log(data.message);
          return;
        }
        setEditTask(data)
      } catch (error) {
        console.log(error);
      }
    };
    edittodo();
  }, [params.id]);

  return (
    <div className={classes.addTodo}>
      <h1>Edit Todo</h1>
      <form onSubmit={submitHandler} className={classes.todoform}>
        <label>Task name</label>
        <input
          type="text"
          id="title"
          onChange={(e) => setEditTask((prev)=>({...prev, [e.target.id]: e.target.value }))}
          value={editTask?.title || ''}
        />
        <button>submit</button>
      </form>
    </div>
  );
}
