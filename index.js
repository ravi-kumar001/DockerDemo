const express = require("express");
const app = express();
app.get("/home",(req,res)=>{
    res.json({message : "This is Home Page."})
})
app.listen(3000,()=>{
    console.log("App is running");
});