const mongoose=require('mongoose');
const SubmitAssignSchema=new mongoose.Schema({
   name:{  type:String  },
   images:{  type:String  }
},{
    timestamps:true
})
module.exports=mongoose.model('SubmitAssign',SubmitAssignSchema)