const express = require("express");
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const router = express.Router();
const teachersModel = require("./../db/dbTeacher");

router.route("")
      .get((req,res)=>{
        if(req.session.teacher){
          teachersModel.findOne({id:req.session.teacherId},(error,docs)=>{
            if(error){
              res.sendStatus(404);
          }
            res.render('teacherDashboard',{title:"Student",data:docs});
          });
        }else{
          res.sendStatus(404);
        }
    }).post(urlencodedParser,(req,res)=>{
      if(req.body.teacherLogout != undefined ){
        req.session.destroy((err)=>{
          if(err)
            return console.log(err);
          else  
            res.redirect("/");
        });
        
      }
    });

router.route("/class")
      .get((req,res)=>{
        res.render("teacherClass",{title:"class"});
      }).post(urlencodedParser,(req,res)=>{

      });

router.route("/class/attendance")
      .get((req,res)=>{
        let a = req.body;
        res.render("takeAttendance",{title:"Attendance"})
    }).post(urlencodedParser,(req,res)=>{
        let a = req.body;
        res.render("takeAttendance",{title:"Attendance"})
    })

module.exports = router;

//var today = new Date();

//var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
