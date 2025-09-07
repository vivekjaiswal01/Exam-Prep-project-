const { default: mongoose } = require('mongoose');
const Admin = require('mongoose');
const adminSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
},
{
   timestamps:true,
}
)
module.exports=mongoose.model("Admin",adminSchema)