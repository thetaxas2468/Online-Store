
const express = require("express");
var cors = require("cors");
const mongoose=require("mongoose")
const users=require("./Routes/users")
const items=require("./Routes/items")
const bodyParser = require('body-parser')

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/items",items);
app.use("/users",users);



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


