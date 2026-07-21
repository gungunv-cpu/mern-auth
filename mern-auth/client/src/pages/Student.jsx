import { useEffect, useState } from "react";
import axios from "axios";

function Students(){

    const [students,setStudents] = useState([]);


    // Get all students
    useEffect(()=>{

        axios.get("http://localhost:5000/api/students")
        .then((res)=>{
            setStudents(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });

    },[]);



    // Delete student
    const deleteStudent = (id)=>{

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this student?"
        );


        if(confirmDelete){

            axios.delete(`http://localhost:5000/api/students/${id}`)
            .then(()=>{

                alert("Student Deleted");


                setStudents(
                    students.filter(
                        (student)=>student._id !== id
                    )
                );

            })
            .catch((err)=>{
                console.log(err);
            });

        }

    };



    return(

        <div className="container">

            <h1>Students List</h1>


            <table border="1">

                <thead>

                    <tr>

                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Action</th>

                    </tr>

                </thead>



                <tbody>


                {
                    students.map((student)=>(


                        <tr key={student._id}>


                            <td>
                                {student.name}
                            </td>


                            <td>
                                {student.email}
                            </td>


                            <td>
                                {student.age}
                            </td>


                            <td>
                                {student.course}
                            </td>



                            <td>

                                <button
                                onClick={()=>{
                                    window.location.href =
                                    `/edit-student/${student._id}`
                                }}
                                >
                                    Edit
                                </button>



                                <button
                                onClick={()=>{
                                    deleteStudent(student._id)
                                }}
                                >
                                    Delete
                                </button>


                            </td>


                        </tr>


                    ))
                }


                </tbody>


            </table>


        </div>

    )

}


export default Students;
