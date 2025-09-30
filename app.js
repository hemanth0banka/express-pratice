const express = require("express");
const app = express()
const port = 1005

app.use(express.json())

app.use((req,res,next)=>{
    req.user = "guest"
    next()
})

app.get("/welcome",(req,res)=>{
    res.send(`<h1>Welcome, ${req.user}!</h1>`)
})

app.listen(port,()=>{
    console.log(`listening at port ${port}`)
})