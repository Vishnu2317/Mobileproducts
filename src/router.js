const express = require("express")
const mobileModel = require("./schema")
const mobilerouter = express.Router()

mobilerouter.post('/post',async(req,res)=>{
    const {mobilename,image,price,desc,rating:{rate,count}} = req.body
    try {
            const newProducts = new mobileModel({mobilename,image,price,desc,rating:{rate,count}})
            await newProducts.save()
            res.send(newProducts)
    } catch (error) {
        console.log(error);
        res.send({message:"failed creating Product"}) 
    }
})

mobilerouter.get('/products',async(req,res)=>{
    try {
       const allproducts = await mobileModel.find()
       res.send(allproducts)
    } catch (error) {
        res.send({message:"failed getting products"})
    }
})

mobilerouter.get('/products/:id',async(req,res)=>{
    const id = req.params.id
    try {
       const selectedproducts = await mobileModel.findById(id)
       res.send(selectedproducts)
    } catch (error) {
        res.send({message:"failed getting product"})
    }
})

mobilerouter.put('/edit/:id',async(req,res)=>{
    const {mobilename,image,price,desc,rating:{rate,count}} = req.body
    const id = req.params.id
    try {
        const editedproducts = await mobileModel.findByIdAndUpdate(id,{mobilename,image,price,desc,rating:{rate,count}})
        res.send({message:"product updated"})   
    } catch (error) {
        console.log(error);
        res.send({message:"failed editing product"}) 
    }
})

mobilerouter.delete('/delete/:id',async(req,res)=>{
    const id = req.params.id
    try {
        await mobileModel.findByIdAndDelete(id)
        res.send({message:"product deleted"})
    } catch (error) {
        res.send({message:"failed deleting product"}) 
    }
})
module.exports = mobilerouter