const mongoose = require("mongoose");



const studentsModel = mongoose.model("students",{
    id:{
        type:Number,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    class:{
        type:String,
        require:true
    },
    roll:{
        type:Number,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    pass:{
        type:String,
        require:true
    },
    classes:{
        type:[String]
    }
});
module.exports = studentsModel;