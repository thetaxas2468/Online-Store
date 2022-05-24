
const express = require("express");
var cors = require("cors");
const mongoose=require("mongoose")




const Routes=require("./Routes")
// app.get("/",(req,res)=>res.send("hey"))
const app=express();
app.use(cors());
app.use("/items",Routes);
app.use((req,res)=>{
    res.status(404)
    res.send("404 page not found")
})





mongoose
  .connect("mongodb://localhost:27017", {dbName:'market' ,useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected to mongoDB!")
    app.listen(3002,()=>{
      console.log("Server connected at port 3002")
  })})
  .catch(() => console.log("failed to connect to mongoDB."));


