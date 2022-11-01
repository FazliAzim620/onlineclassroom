const mongoose=require('mongoose');
const SubmitQuizSchema=new mongoose.Schema({
    quiz:[
        {
            stdName:   { type:String },
            score:  { type:String}
}]
},{
    timestamps:true
})
module.exports=mongoose.model('SubmitQuiz',SubmitQuizSchema)