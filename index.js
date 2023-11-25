const express = require('express');
const app = express();

app.get("/",(req,res)=>{
  res.status(200).send("<h1>this is home page</h1>")
})

app.get("/register",(req,res)=>{
  res.status(200).send("<h1>this site is about registration of user</h1>")
})

app.listen(5500,()=>{
  console.log("server listening on port "+5500);
})
