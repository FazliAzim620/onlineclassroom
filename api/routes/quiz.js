const route = require("express").Router();
const Quiz = require("../Model/Quiz");
const SubmitQuiz = require("../Model/SubmitQuiz");

// Get ALL Quiz 
route.get('/',async(req,res)=>{
    try{
    const quiz=await Quiz.find({}).sort({"createdAt":-1});
    res.status(200).json(quiz);

}catch(e){
    res.status(404).send(e)
}
})

// Get ALL Users Quiz 
route.get('/result',async(req,res)=>{
    try{
    const quiz=await SubmitQuiz.find({}).sort({"createdAt":-1});
    res.status(200).json(quiz);

}catch(e){
    res.status(404).send(e)
}
})

// find Quiz
route.get('/:id',async(req,res)=>{
    try{
    const quiz = await Quiz.findOne({_id:req.params.id});
    res.status(200).json(quiz);

}catch(e){
    res.status(404).send(e)
}
})

route.post('/',async(req,res)=>{
try{
    const quiz= new Quiz({
        question:req.body.question,
        opts1:req.body.opts1,
        opts2:req.body.opts2,
        opts3:req.body.opts3,
        answer:req.body.answer
    });

    await quiz.save();
    res.status(200).json(quiz)
}catch(err){
    console.log(err)
}
});

route.post('/attend',async(req,res)=>{
    try{
        // const quiz = await Quiz.findOne({_id:req.params.id});
        var quiz = await Quiz.find();
        var quiza = req.body;
       
        let score = 0;
        let name;
        var items = []
        for (var i = 0; i < quiz.length; i++){
           
            if(quiza[i].opts1 == quiz[i].answer ){
                 score++
            }
            if(quiza[i].opts2 == quiz[i].answer){
                score++
            }
            if(quiza[i].opts3 == quiz[i].answer){
               score++  
            }
            name = quiza[i].name
        }
        var item = {  
            name:name,
            score:score
         }
        items.push(item)
        var submitQuiz = new SubmitQuiz({
            quiz:items,
            // quizId:req.params.id
        })
        // console.log(submitQuiz)

        await submitQuiz.save();
        res.status(200).json(score)
    }catch(err){
        console.log(err)
    }
    });

// find Quiz
route.get('/:id',async(req,res)=>{
    try{
    const quiz=await SubmitQuiz.findOne({_id:req.params.id});
    res.status(200).json(quiz);

}catch(e){
    res.status(404).send(e)
}
})

module.exports=route;