const express = require("express")
const app = express()
const category = require("./category")
const products = require("./products")
const port = 7015

app.use(express.json())

app.use((req,res,next)=>{
    console.log(`${req.method} request made to ${req.url}`)
    next()
})

app.use("/category",category)
app.use("/products",products)

app.use((req,res)=>{
    res.status(404).send(`<h1>404 - Page Not Found</h1>`)
})

app.listen(port,()=>{
    console.log(`Listening at port ${port}`)
})