const express = require("express");
const users = require("./users/users");
require('dotenv').config()
const app = express();
const port = process.env.port

app.get("/api/v1/users", (req,res)=>{
    res.json(users)
})

app.listen(port, ()=>{
    console.log(`This app is running on port ${port}`)
})