import TodoList from "../models/todo.model.js"

export const addTodo = async (req, res, next)=>{
  try {
    const todolist = await TodoList.create(req.body)
   res.status(201).json(todolist)
  } catch (error) {
    console.log(error)
  }
   
}
export const getTodos = async(req, res) => {

 try {
  const userTodos = await TodoList.find({uid: req.params.userid})
  res.status(200).json(userTodos)

 } catch (error) {
  console.log(error)
 }
}
export const getTodo = async (req, res)=>{
  try {
    const userTodos = await TodoList.findById({_id: req.params.todoId})
    res.status(200).json(userTodos)
  
   } catch (error) {
    console.log(error)
   }
}
export const updateTodo = async(req, res)=>{
  try {
    const updateUserTodos = await TodoList.findByIdAndUpdate({_id: req.params.todoId}, req.body, { new: true })
    res.status(200).json(updateUserTodos)
  
   } catch (error) {
    console.log(error)
   }
}