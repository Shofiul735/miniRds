const express = require("express");
const hbs = require('hbs');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const session = require("express-session");
const student = require("./routes/student");
const teacher = require("./routes/teacher");
const studentsModel = require("./db/dbStudents");
const teachersModel = require("./db/dbTeacher");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/miniRDS",{
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology: true,
        useFindAndModify: false
},(err)=>{
    if(!err){
        console.log("Connected")
    }else{
        console.log("Couldn't connect!");
    }
});


//path variable
const viewsPath = path.join(__dirname,"/../templates/views");
const staticPath = path.join(__dirname,'/../public');
const partialsPath = path.join(__dirname,'/../templates/partials'); 
//path variable section end

//app setup
app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);
//app setup section end


//static file path defined
app.use(express.static(staticPath));
app.use(session({
    secret:"secret-key",
    resave:false,
    saveUninitialized:false
}));
app.use(bodyParser.json());
app.use("/student",student);
app.use("/teacher",teacher);

app.route('/').get((req,res)=>{
    if(req.session.student){
        res.redirect("/student");
    }
    if(req.session.teacher){
        res.redirect("/teacher");
    }
    res.render("login",{title:"login"});
}).post(urlencodedParser,(req,res)=>{
    const loginCategory = req.body.login;
    if(loginCategory === "student"){
        studentsModel.findOne({id:Number.parseInt(req.body.id),pass:req.body.password},(error,docs)=>{
            if(docs){
                req.session.studentId = docs.id;
                req.session.student = true;
                res.redirect("/student");
            }else{
                res.render("login",{title:"error"});
            }
        })
    }else{
        teachersModel.findOne({id:Number.parseInt(req.body.id),pass:req.body.password},(error,docs)=>{
            if(docs){
                req.session.teacherId = docs.id;
                req.session.teacher = true;
                res.redirect("/teacher");
            }else{
                res.render("login",{title:"error"});
            }
        })
    }
});

app.listen(3000,()=>{
    console.log("App is up at port 3000!")
});