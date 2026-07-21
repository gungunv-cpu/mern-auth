import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";


function EditStudent(){

    const {id} = useParams();

    const navigate = useNavigate();


    const [student,setStudent] = useState({
        name:"",
        email:"",
        age:"",
        course:""
    });


    // Get existing student data

    useEffect(()=>{

        axios.get(`http://localhost:5000/api/students/${id}`)
        .then((res)=>{

            setStudent(res.data);

        })
        .catch((err)=>{
            console.log(err);
        });


    },[id]);



    const handleChange=(e)=>{

        setStudent({
            ...student,
            [e.target.name]:e.target.value
        });

    };



    const handleSubmit=(e)=>{

        e.preventDefault();


        axios.put(
            `http://localhost:5000/api/students/${id}`,
            student
        )
        .then(()=>{

            alert("Student Updated");

            navigate("/students");

        })
        .catch((err)=>{
            console.log(err);
        });


    };



    return(

        <div>

            <h1>Edit Student</h1>


            <form onSubmit={handleSubmit}>


                <input
                name="name"
                value={student.name}
                onChange={handleChange}
                />

                <br/>


                <input
                name="email"
                value={student.email}
                onChange={handleChange}
                />

                <br/>


                <input
                name="age"
                value={student.age}
                onChange={handleChange}
                />

                <br/>


                <input
                name="course"
                value={student.course}
                onChange={handleChange}
                />

                <br/>


                <button type="submit">
                    Update Student
                </button>


            </form>


        </div>

    )

}


export default EditStudent;
