const Item=require("../../Models/Item")
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
    }).catch(e=>res.send(false))
    
});


router.get("/update-item", (req,res)=>{
    Item.countDocuments({QR:req.query.QR}).then(result=>{
        if(result==0){
            res.send(false)
        }
    }).catch(e=>res.send("0"))
    const item=new Item({
        name:req.query.name,
        value:Number(req.query.value),
        QR:req.query.QR,
        details:req.query.desc
    })
    Item.updateMany({QR:item.QR},{$set:{"name":item.name,"value":item.value,"details":item.details}}).then((result)=>{
        res.send(true)
    }).catch((e)=>console.log(e))
    
});


router.get("/delete-item", (req,res)=>{
    Item.countDocuments({QR:req.query.QR}).then(result=>res.send(String(result).toString())).catch(e=>res.send("0"))
    Item.deleteMany({QR:req.query.QR}).then((result)=>{
        res.send("1")
    }).catch((e)=>res.send("0"))
    
});

router.get("/",async (req,res)=>{
    await Item.find().then((result)=>{
        res.send(result)
    }).catch(err=>console.log(err));
})




module.exports=router;