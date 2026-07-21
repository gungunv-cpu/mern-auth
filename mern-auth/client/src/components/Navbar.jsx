import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(){

    return(
        <nav className="navbar">

            <h2>MERN Student App</h2>

            <div>

                <Link to="/home">Home</Link>

                <Link to="/students">Students</Link>

                <Link to="/add-student">Add Student</Link>

            </div>

        </nav>
    )

}

export default Navbar;
