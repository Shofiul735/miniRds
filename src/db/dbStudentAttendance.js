const mongoose = require("mongoose");


const attendance = (collectionName)=>{
    try{
    let subjectAttendance = mongoose.model(collectionName,{
        date:{
            type:String
        },
        present:{
            type:Number
        }
    });
    return subjectAttendance;
    }catch(err){
        let subjectAttendance = mongoose.model(collectionName
        );
        return subjectAttendance;
    }
    
}


module.exports = attendance;