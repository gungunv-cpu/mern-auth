const express = require("express");
const router = express.Router();

const Student = require("../models/Student");


// CREATE STUDENT
router.post("/", async(req,res)=>{

    try{

        const student = await Student.create(req.body);

        res.json(student);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});



// READ ALL STUDENTS
router.get("/", async(req,res)=>{

    try{

        const students = await Student.find();

        res.json(students);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});



// READ SINGLE STUDENT
router.get("/:id", async(req,res)=>{

    try{

        const student = await Student.findById(req.params.id);

        res.json(student);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});



// UPDATE STUDENT
router.put("/:id", async(req,res)=>{

    try{

        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true
            }
        );

        res.json(student);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});



// DELETE STUDENT
router.delete("/:id", async(req,res)=>{

    try{

        await Student.findByIdAndDelete(req.params.id);

        res.json({
            message:"Student deleted"
        });

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});


module.exports = router;
