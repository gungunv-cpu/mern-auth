import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function AddStudent(){

    const navigate = useNavigate();


    const [student,setStudent] = useState({
        name:"",
        email:"",
        age:"",
        course:""
    });


    const handleChange = (e)=>{
        setStudent({
            ...student,
            [e.target.name]:e.target.value
        });
    };


    const handleSubmit = (e)=>{

        e.preventDefault();

        axios.post(
    "http://localhost:5000/api/students",
    student
)
.then(()=>{

    alert("Student Added");

    navigate("/students");

})
.catch((err)=>{
    console.log(err);
});


    };


    return(
        <div>

            <h1>Add Student</h1>

            <form onSubmit={handleSubmit}>

                <input
                name="name"
                placeholder="Name"
                onChange={handleChange}
                />

                <br/>

                <input
                name="email"
                placeholder="Email"
                onChange={handleChange}
                />

                <br/>

                <input
                name="age"
                placeholder="Age"
                onChange={handleChange}
                />

                <br/>

                <input
                name="course"
                placeholder="Course"
                onChange={handleChange}
                />

                <br/>

                <button type="submit">
                    Add Student
                </button>

            </form>

        </div>
    )
}


export default AddStudent;
