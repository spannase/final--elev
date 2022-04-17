const mongoose = require("mongoose")

const classSchema= new mongoose.Schema({

    grade:{type: String, required:true},
    section:{type: String, required:true},
    subject:{type: String, required:true},
    teacher_id:{type:mongoose.Schema.Types.ObjectId, ref:"teacher", require:true }
},
{
    versionKey:false,
    timestamps:true,
}
)

module.exports= mongoose.model("class", classSchema )