const express = require("express")
const route = express.Router()

let products = [{id : 1,name : "phone"}];

route.get("/",(req,res)=>{
    res.status(200).json({
        message : `Here is the List Of All Products products`,
        data : products
    })
})

route.post("/",(req,res)=>{
    let {name} = req.body
    let obj = {id : products.length+1 , name}
    products.push(obj)
    res.status(201).json({
        message : `Here is the List Of All Products`,
        data : obj
    })
})

module.exports = route