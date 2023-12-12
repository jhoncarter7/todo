import express from 'express'
import { addTodo, getTodo, getTodos, updateTodo } from '../controller/todo.controller.js'

const  router = express.Router()

router.post('/createTodo', addTodo)
router.get('/getTodos/:userid', getTodos)
router.get('/getTodo/:todoId', getTodo)
router.post('/updateTodo/:todoId', updateTodo)
export default router