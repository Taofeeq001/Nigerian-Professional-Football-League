const express = require("express");
const users = require("./users/users");
require('dotenv').config()
const app = express();
const port = process.env.PORT


app.get("/api/v1/clubs", (req,res)=>{
    res.json(users)
});

// Route to handle the club names when search
app.get("/api/v1/clubs/:clubName", (req, res)=>{
    const clubName = req.params.clubName.toLocaleLowerCase();
    const club = users.find(entry=>entry.club_name.toLocaleLowerCase()===clubName)

    if(club){
        res.json(club)
    }
    else{
        res.status(404).json({error: "Club not found"})
    }
})

app.listen(port, ()=>{
    console.log(`This app is running on port ${port}`)
})