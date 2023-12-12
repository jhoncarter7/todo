import  express  from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import todolist from './routes/todos.routes.js'
import bodyParser from "body-parser";

dotenv.config()
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("connected to dataBase")
})
const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use('/api/todo', todolist)
app.listen(3000, ()=>{
    console.log('port is running on server 3000')
})