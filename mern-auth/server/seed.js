const mongoose = require("mongoose");
require("dotenv").config();

const Student = require("./models/Student");


mongoose.connect(process.env.MONGO_URI)
.then(async()=>{

    await Student.create({
        name:"Rahul Sharma",
        email:"rahul@gmail.com",
        age:22,
        course:"MERN"
    });

    console.log("Student Added");

    mongoose.connection.close();

})
.catch(err=>console.log(err));
