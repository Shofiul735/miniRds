const express = require("express");
const bodyParser = require('body-parser');
const session = require("express-session");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const router = express.Router();
//const peerjs = require("peerjs");
const studentsModel = require("./../db/dbStudents");
const studentAttendanceModel = require("./../db/dbStudentAttendance");
const schoolNotices = require("./../db/dbNotice");
const testsModel = require("./../db/dbStudentTests");
const submitModel = require("./../db/submitdb");


const takeOneStudentData = (studentID,renderFile,title,res)=>{
    studentsModel.findOne({id:studentID},(error,docs)=>{
        if(error){
            res.sendStatus(404);
        }
        res.render(renderFile,{title:title,data:docs});
    });
}
const retriveSubjectsThatHaveTest = ()=>{
    return new Promise((resolve,reject)=>{
        testsModel.find({},(err,docs)=>{
            if(err){
                reject(err);
            }else{
                resolve(docs);
            }
        })
    });
}
const schooleNoticeFunction = ()=>{
    return new Promise(
        (resolve,reject)=>{
            schoolNotices.find({},(err,docs)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(docs);
                }
            })
        }
    );
}

router.route("") 
        .get((req,res)=>{
            if(req.session.student){
                takeOneStudentData(req.session.studentId,"studentDashboard","Student",res)
            }else{
                res.redirect("/");
            }   
        }).post(urlencodedParser,(req,res)=>{
            if(req.body.studentLogout !== undefined){
                req.session.destroy((err) => {
                    if(err)
                        console.log(err);
                    else
                        res.redirect("/");
                });
            }
        });



router.route('/attendance')
    .get((req,res)=>{
        takeOneStudentData(req.session.studentId,"studentClass","Attendance",res);
    }).post(urlencodedParser,(req,res)=>{

    });

router.route('/attendance/:subject')
        .get((req,res)=>{
            if(!req.session.student){
                res.redirect("/");
            }
            const  sub = req.params.subject;
            const  id = req.session.studentId;
            const collectionName = sub+""+id;
            const model = studentAttendanceModel(collectionName);
            model.find({},(err,docs)=>{
                if(!err){
                    res.render('studentAttendance',{title:sub,data:docs
                    });
                }
            })
            
            
        }).post(urlencodedParser,(req,res)=>{

        });


router.route("/notice")
        .get((req,res)=>{
            const asyncNoticeFunction = async () =>{
                let  result1 = await schooleNoticeFunction();
                res.render("studentNotice",{title:"Notices",data:result1});
            }
            asyncNoticeFunction();
            
        }).post(urlencodedParser,(req,res)=>{

        });
router.route("/test")
        .get((req,res)=>{
            const functionForTest = async () =>{
                const data = await retriveSubjectsThatHaveTest();
                res.render("studentTest",{title:"Test",data:data});
            }
            functionForTest();
        }).post((req,res)=>{

        })            
router.route('/class')
      .get((req,res)=>{
        takeOneStudentData(req.session.studentId,"studentClass","Attendance",res);
        }).post(urlencodedParser,(req,res)=>{

        });
router.route("/student/test/:subject")
        .get((req,res)=>{
            res.render("submit",{title:"Submit"})
        }).post((req,res)=>{
            const id=req.session.studentId;
            const ln = req.body.link;
            const result={
                studentId:id,
                link:ln
            }
            const s = new submitModel(result); 
            s.save((err)=>{
                console.log(err);
            });
        });

router.route('/class/:subject')
        .get((req,res)=>{
            // let student = req.session.studentId;
            // student+="";
            // const peer = new Peer(student);
            // peer.on('connection', (conn) => {
            //     conn.on('data', (data) => {
            //       res.render("video",{title:"Video",data:data})
            //     });
            //     conn.on('open', () => {
            //       conn.send('hello!');
            //     });
            //   });
            res.render("video",{title:"Video",data:data})
          }).post(urlencodedParser,(req,res)=>{
  
          });


module.exports = router;




// get value from url 
// req.params.[variable_name]