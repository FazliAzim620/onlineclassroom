const mongoose=require('mongoose');
const QuizSchema=new mongoose.Schema({
   question:{
       type:String,
       require:true
   },
   opts1:{
    type:String,
    require:true
   },
   opts2:{
    type:String,
    require:true
   },
   opts3:{
    type:String,
    require:true
   },
   answer:{
        type:String,
     }
   },{
    timestamps:true
})
module.exports=mongoose.model('Quiz',QuizSchema)