const {MongoClient, ObjectID} = require("mongodb");

const url= "mongodb://localhost:27017";
const dbname = "miniRDS"

MongoClient.connect(url,{useNewUrlParser:true},(error,client)=>{
    if(error){
     console.log("Unable to connect!!");
     return;
    }
    const db = client.db(dbname);
    // db.collection("students").insertMany([ {
    //     id:1241,
    //     name:"Makki Islam",
    //     class:"10",
    //     roll:18,
    //     gender:"Male",
    //     pass:"123456"
    // },{
    //     id:1242,
    //     name:"Taslima Khan",
    //     class:"6",
    //     roll:25,
    //     gender:"Female",
    //     pass:"123456"  
    // },{
    //     id:1243,
    //     name:"Aysha Amin",
    //     class:"12",
    //     roll:12,
    //     gender:"Female",
    //     pass:"123456"
    // },{
    //     id:1244,
    //     name:"Adiba Islam",
    //     class:"10",
    //     roll:10,
    //     gender:"Female",
    //     pass:"123456"
    // }]);
    // db.collection("teachers").insertMany([
    //     {
    //         id:7123,
    //         name:"Alan Smith",
    //         subject:"Math",
    //         gender:"Male",
    //         pass:"1234567"
    //     },{
    //         id:7124,
    //         name:"Habiba Jannat",
    //         subject:"English",
    //         gender:"Female",
    //         pass:"1234567"  
    //     },{
    //         id:7125,
    //         name:"Hasan Aziz",
    //         subject:"Bangla",
    //         gender:"Male",
    //         pass:"1234567"
    //     },{
    //         id:7126,
    //         name:"Md. Habib",
    //         subject:"Physic",
    //         gender:"Male",
    //         pass:"1234567"
    //     },{
    //         id:7127,
    //         name:"Aysha Jaman",
    //         subject:"ICT",
    //         gender:"Female",
    //         pass:"1234567"
    //     }
    // // ]);
    // db.getCollection("teachers").update({},{$set: {classes:["class-6","class-7","class-8","class-9","class-10"]}},{upsert:false,multi:true})
    // db.collection("ict1234").insertMany([
    //     {
    //         date:"01-01-2021",
    //         present: 1
    //     },
    //     {
    //         date:"02-01-2021",
    //         present: 0
    //     },
    //     {
    //         date:"03-01-2021",
    //         present: 0
    //     },
    //     {
    //         date:"04-01-2021",
    //         present: 1
    //     },
    //     {
    //         date:"05-01-2021",
    //         present: 0
    //     },
    //     {
    //         date:"06-01-2021",
    //         present: 1
    //     },
    //     {
    //         date:"07-01-2021",
    //         present: 1
    //     },
    //     {
    //         date:"09-01-2021",
    //         present: 1
    //     },
    // ])

    // db.collection("schoolNotices").insertMany([
    //     {
    //         title:"annual sports day",
    //         date:"03-01-2021",
    //         details:"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text"
    //     },{
    //         title:"Natonal holiday",
    //         date:"01-01-2021",
    //         details:"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text"
    //     },
    //     {
    //         title:"independent day",
    //         date:"26-03-2021",
    //         details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" 
    //     } ]);
    // db.collection("class9Tests").insertMany([
    //     {
    //         subject:"bangla",
    //         date:"01-04-2021"
    //     },{
    //         subject:"english",
    //         date:"03-04-2021"
    //     },{
    //         subject:"math",
    //         date:"05-04-2021"

    //     },{
    //         subject:"ict",
    //         date:"07-04-2021"
    //     },{
    //         subject:"ict",
    //         date:"08-04-2021"
    //     }
    // ]);
    console.log("Successfully connnected!!");
});
