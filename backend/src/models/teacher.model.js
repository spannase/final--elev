const mongoose = require("mongoose")

const teacherSchema= new mongoose.Schema({
    name:{type: String, required:true},
    gender:{type:String,  require:true},
    age:{type:Number, require:true},
    image:{type:String, require:true},
},
{
    versionKey:false,
    timestamps:true,
}
)


module.exports= mongoose.model("teacher", teacherSchema )

// classes:[{type:mongoose.Schema.Types.ObjectId, ref:"class", require:true }],