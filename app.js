const express = require('express')
const app = exress()

app.get('/names',(req,res)=>{
    res.send("Riadh");
})

app.listen(5000,()=>{
    console.log("server is runing");
})