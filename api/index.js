import  express  from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import todolist from './routes/todos.routes.js'
import bodyParser from "body-parser";
import path from 'path'

dotenv.config()
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("connected to dataBase")
})
const __dirname = path.resolve();
const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use('/api/todo', todolist)
app.use(express.static(path.join(__dirname, '/client/dist')))
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})

app.listen(3000, ()=>{
    console.log('port is running on server 3000')
})