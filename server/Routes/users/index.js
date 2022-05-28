const User=require("../../Models/User")
const loggedin=require("../../Models/loggedin")
const router = require('express').Router();
const CryptoJS = require("crypto-js");
const key="787";
router.post("/signup",(req,res)=>{
    const { email , password } =req.body;
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(password), key).toString();
    User.create({email:email,password:ciphertext}).then((result)=>{
        loggedin.create({email:email,loggedin:true}).then(result2=>{
            res.send(true)
        })
    }).catch((err)=>{
        res.send(false)
    })
});

router.post("/signin",(req,res)=>{
    User.findOne({"email":"test@hotmail.com"}).then(result=>{
        var bytes = CryptoJS.AES.decrypt(result.password, key);
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        if(decryptedData===req.body.password){
            res.send(true)
        }
        else{
            res.send(false)
        }
    }).catch((err)=>res.send(false))
})


module.exports=router;