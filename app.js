const express = require("express")
const app = express()
const port = 7004

app.use(express.json())

let category = [{id : 1,name : "Electronics"}];
let products = [{id : 1,name : "phone"}];

app.use((req,res,next)=>{
    console.log(`${req.method} request made to ${req.url}`)
    next()
})

app.get("/products",(req,res)=>{
    res.status(200).json({
        message : `Here is the List Of All Products products`,
        data : products
    })
})

app.get("/category",(req,res)=>{
    res.status(200).json({
        message : `Here is the List Of All category category`,
        data : category
    })
})

app.post("/products",(req,res)=>{
    let {name} = req.body
    let obj = {id : products.length+1 , name}
    products.push(obj)
    res.status(201).json({
        message : `Here is the List Of All Products`,
        data : obj
    })
})

app.post("/category",(req,res)=>{
    let {name} = req.body
    let obj = {id : category.length+1 , name}
    category.push(obj)
    res.status(201).json({
        message : `Here is the List Of All category`,
        data : obj
    })
})

app.use((req,res)=>{
    res.status(404).send(`<h1>404 - Page Not Found</h1>`)
})

app.listen(port,()=>{
    console.log(`Listening at port ${port}`)
})