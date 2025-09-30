const express = require('express')
const app = express()
app.use((req,res,next)=>{
    console.log("HEllo im in")
    next()
})
app.use((req,res,next)=>{
    res.send("<h1>Welcome to the Home Page ... </h1>")
})
app.listen(5000,()=>{console.log("listening at port 5000")})