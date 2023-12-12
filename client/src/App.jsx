import { Route,  Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Todo from "./pages/Todo";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./component/PrivateRoute";
import AddTodo from "./pages/AddTodo";
import EditTodo from "./pages/EditTodo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute/>}>
        <Route path="/" element={<Todo/>}/>
        <Route path="/addTodo" element={<AddTodo/>}/>
        <Route path="/editTodo/:id" element={<EditTodo/>}/>
        </Route>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}
