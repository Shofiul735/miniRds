const mongoose = require("mongoose");
const submitModel = mongoose.model("studentSubmition",{
    studentId:{
        type:Number,
        require:true
    },
    link:{
        type:String,
        require:true
    }
})

module.exports = submitModel;