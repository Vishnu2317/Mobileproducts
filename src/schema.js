const mongoose = require("mongoose")

const mobileSchema = new mongoose.Schema({
    mobilename : {type:String,required:true},
    image : {type:String,required:true},
    price : {type:Number,required:true},
    desc : {type:String,reqired:true},
    rating : {
        rate:{type:Number,reqired:true},
        count:{type:Number,reqired:true}
    }
})

const mobileModel = mongoose.model("products",mobileSchema)



module.exports = mobileModel