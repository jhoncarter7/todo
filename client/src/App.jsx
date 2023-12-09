import { Route,  Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Todo from "./component/Todo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo/>}/>
      </Routes>
    </BrowserRouter>
  );
}
