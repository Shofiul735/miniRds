const mongoose = require("mongoose");
const teachersModel = mongoose.model("teachers",{
    id:{
        type:Number,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    subject:{
        type:String,
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
module.exports = teachersModel;