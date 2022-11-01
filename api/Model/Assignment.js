const mongoose=require('mongoose');
const AssignmentSchema=new mongoose.Schema({
   name:{
       type:String,
       require:true
   },
   desc:{
       type:String,
       max:500
   },
   dueDate:{
       type:String,
       require:true
    }},{
    timestamps:true
})
module.exports=mongoose.model('Assignment',AssignmentSchema)