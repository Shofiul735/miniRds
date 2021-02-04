const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/miniRDS",{
//         useNewUrlParser:true,
//         useCreateIndex:true,
//         useUnifiedTopology: true,
//         useFindAndModify: false
// },(err)=>{
//     if(!err){
//         console.log("Connected")
//     }else{
//         console.log("Couldn't connect!");
//     }
// });



const tests = new mongoose.Schema({
    subject:{
        type:String,
        required:true,
        default:"ict"
    },
    date:{   
       type:String,
       required:true,
       default:"01-01-2021"
    }
},
{
    collection: "class9Tests"
}

);
const testsModel = mongoose.model("class9Tests",tests);
module.exports = testsModel;