const express= require("express");

const Class= require("../models/class.model");

const router = express.Router();


router.post("/classes", async(req,res)=>{
    try{
        const cls =await Class.create(req.body);
 
        return res.status(201).send(cls)
    }catch(e){
        return res.status(500).send(err.message)
    }
})


router.get("/classes", async(req,res)=>{
    try{
        const cls =await Class.find().lean().exec();
 
        return res.send(cls)
    }catch(e){
        return res.status(500).send(err.message)
    }
});


module.exports=router

