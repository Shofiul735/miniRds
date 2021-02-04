const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    date:{
        type:String,
        required:true,
        default:"01-01-2021"
    },
    details:{
        type:String,
        require:true
    }
});
const model = mongoose.model("notices",schema);

module.exports = model;