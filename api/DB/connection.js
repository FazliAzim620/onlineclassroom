const mongoose=require('mongoose');
const ConnectDB=async()=>{
    try{
        mongoose.connect("mongodb://localhost:27017/Classroom",()=>{
            console.log("DB is connected successfuly")
        })
    }catch(err){

        console.log('not connected the DB due to :'+err)
    }
}
module.exports=ConnectDB;
// mongodb://localhost:27017/Classroom
// mongodb+srv://todolist:usman098@cluster0.metrh.mongodb.net/Classroom?retryWrites=true&w=majority