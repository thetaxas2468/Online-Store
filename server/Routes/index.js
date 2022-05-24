const Item=require("../Models/Item")
const router = require('express').Router();
router.get("/add-item", (req,res)=>{
    
    const item=new Item({
        name:req.query.name,
        value:Number(req.query.value),
        QR:req.query.QR,
        details:req.query.desc
    })
    Item.create(item).then((result)=>{
        res.send(true)
    })
    
});
router.get("/",(req,res)=>{
    Item.find().then((result)=>{
        res.send(result)
    }).catch(err=>console.log(err));
})




module.exports=router;