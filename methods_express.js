import express from "express";

const app=express();
app.use(express.json());

app.get('/get-user' ,(req,res)=>{
    res.send("api sucess");
})

app.post('/post-user',(req,res)=>{
    
})