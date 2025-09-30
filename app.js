const express = require("express")
const app = express()
const port = 3000

app.use(express.json())

let users = [{id : 1,name : "Hemanth"}];
let orders = [{id : 1,name : "phone"}];

app.get("/orders",(req,res)=>{
    res.status(200).json(orders).send(`Here is the List Of All Orders ${orders}`)
})
app.get("/users",(req,res)=>{
    res.status(200).json(users).send(`Here is the List Of All Users ${users}`)
})
app.post("/orders",(req,res)=>{
    let {name} = req.body
    let obj = {id : orders.length+1 , name}
    orders.push(obj)
    res.status(201).json(obj).send(`Here is the List Of All Orders ${orders}`)
})
app.post("/users",(req,res)=>{
    let {name} = req.body
    let obj = {id : users.length+1 , name}
    users.push(obj)
    res.status(201).json(obj).send(`Here is the List Of All Orders ${users}`)
})

app.listen(port,()=>{
    console.log(`Listening at port ${port}`)
})