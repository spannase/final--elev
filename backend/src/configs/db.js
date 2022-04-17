const mongoose= require("mongoose");

const connect =()=>{
    return mongoose.connect(

        "mongodb://127.0.0.1:27017/unit"
        // "mongodb+srv://shr:shr@cluster0.jt1tl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )
}

module.exports=connect