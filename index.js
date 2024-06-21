const express = require("express");
const cors = require("cors");
const mysql2=requrie("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:""
});

app.post("/save",(req,res)=>
{
    let data =[req.body.name,req.body.feedback];
    let sql ="insert into student value(?,?)";
    con.query(sql,data,(err,result)=>{
        if(err)     res.send(err);
        else        res.send(result);
    });

});

app.listen(3000,()=>{console.log("ready to serve @3000");});