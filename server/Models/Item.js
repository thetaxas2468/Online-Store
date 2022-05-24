const mongoose = require("mongoose");

const Item = mongoose.Schema({

    name: {
        type:String,
    required:true
    },
    value:{
        type:Number,
        required:true
    },
    QR:{
        type:String,
        require:true,

    },
    details:{
        type:String,
        required:true
    }
    


},{timestamps:true})

module.exports=mongoose.model('items',Item)