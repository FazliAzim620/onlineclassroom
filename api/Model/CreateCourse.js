const mongoose=require('mongoose');
const CreateCourseSchema=new mongoose.Schema({
    userId:{
        type:String,
        require:true
    },
    coursename:{
        type:String,
        require:true
    },
    instructorname:{
        type:String,
        
    },
    coursecode:{
        type:String,

    },
    accesscode:{
        type:String,
        require:true,
        unique:true
    }
})
module.exports=mongoose.model('CreateCourse',CreateCourseSchema)