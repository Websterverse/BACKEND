const express = require("express")
const path = require("path")
const app = express()


app.set("view engine" , "ejs");

app.get("/profile" , (req , resp)=>{
    const user = {
        name : "kartik kumar",
        age  : 20 ,
    }
    
    resp.render("profile" , {user})
})

app.listen(4000)