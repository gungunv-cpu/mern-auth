import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Students from "./pages/Student";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";

import Navbar from "./components/Navbar";


function App(){

return(

<BrowserRouter>

<Navbar />


<Routes>

<Route path="/" element={<Login />} />

<Route path="/register" element={<Register />} />

<Route path="/home" element={<Home />} />

<Route path="/students" element={<Students />} />

<Route path="/add-student" element={<AddStudent />} />

<Route path="/edit-student/:id" element={<EditStudent />} />


</Routes>


</BrowserRouter>

)

}

export default App;
