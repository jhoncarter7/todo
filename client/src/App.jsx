import { Route,  Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Todo from "./pages/Todo";
import SignIn from "./pages/signin";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./component/PrivateRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute/>}>
        <Route path="/" element={<Todo/>}/>
        </Route>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}
