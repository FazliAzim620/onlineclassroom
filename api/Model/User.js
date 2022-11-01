const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:3,
        max:20
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        min:3,
        max:6
    },
    category:{
        type:String,
        require:true,

    }
   
    
   
},{
    timestamps:true
})
module.exports=mongoose.model('User',UserSchema)