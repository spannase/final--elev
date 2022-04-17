const express= require("express");

const Teacher= require("../models/teacher.model");

const router = express.Router();


router.post("/teachers", async(req,res)=>{
    try{
        const teacher=await Teacher.create(req.body);

        return res.status(201).send(teacher)
    }catch(e){
        return res.status(500).send(err.message)
    }
})


router.get("/teachers", async(req,res)=>{
    try{
        const teacher=await Teacher.find().lean().exec();

        return res.send(teacher)
    }catch(e){
        return res.status(500).send(err.message)
    }
})


router.get("/teachers/:id", async(req,res)=>{
    try{
        const teacher=await Teacher.findById(req.params.id).lean().exec();

        return res.status(201).send(teacher)
    }catch(e){
        return res.status(500).send(err.message)
    }
})

module.exports=router;