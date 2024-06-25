const mongoose = require("mongoose")

const mobileSchema = new mongoose.Schema({
    mobilename : {type:String,required:true},
    image : {type:String,required:true},
    price : {type:String,required:true},
    desc : {type:String,reqired:true},
    rating : {
        rate:{type:String,reqired:true},
        count:{type:String,reqired:true}
    }
})

const mobileModel = mongoose.model("products",mobileSchema)



module.exports = mobileModel