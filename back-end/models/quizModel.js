import mongoose from "mongoose";

const quizSchema= mongoose.Schema({

    Title:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    EachQMark:{
        type:Number,
        required:true
    },
    Duration:{
        type:Number,
        required:true
    },
    Questions:[{
        No:{
            type:Number,
            required:true
        },
        Question:{
            type:String,
            required:true
        },
        NoOfOptions:{
            type:Number,
            required:true
        },
        CorrectAns:{
            type:String,
            required:true
        },
        options: {
            type: Array,
            required: true
          }

    }]
})

export default mongoose.model("QuizForm",quizSchema)