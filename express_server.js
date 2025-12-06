import express from "express";

const app=express();
app.get("/",(req,res)=>{
    res.send("hello from home page!");
})
app.listen(8006,()=>{
    console.log('server is running at port 8006');
})