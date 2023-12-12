import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    uid:{
        type: String,
        required: true,
    }
},{timestamps: true})
const TodoList = mongoose.model("TodoList", todoSchema)
export default TodoList