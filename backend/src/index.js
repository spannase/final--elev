const express= require("express");

const  connect  = require("./configs/db");

const teacherController=require("./controller/teacher.controller")
const classController= require("./controller/class.controller")


const app= express();
app.use(express.json());


app.use("/teachers", teacherController);
app.use("/classes", classController)


app.listen(2345, async function(){
    try{
        await connect()
        console.log(" on port 2345");

    }catch(err){
        console.log("err", err.message)
    }
})