const express = require("express")
const route = express.Router()

let category = [{id : 1,name : "Electronics"}];

route.get("/",(req,res)=>{
    res.status(200).json({
        message : `Here is the List Of All category category`,
        data : category
    })
})

route.post("/",(req,res)=>{
    let {name} = req.body
    let obj = {id : category.length+1 , name}
    category.push(obj)
    res.status(201).json({
        message : `Here is the List Of All category`,
        data : obj
    })
})

module.exports = route