const express = require('express')
const path =require("path")

const route = path.join(__dirname , 'public')
const app = express()

app.get("" ,(req , resp)=>{

resp.sendFile(`${route}/index.html`)

} )

app.get("/work" ,(req , resp)=>{

resp.sendFile(`${route}/work.html`)

})

app.get("*" ,(req , resp)=>{

resp.sendFile(`${route}/404.html`)

} )



app.listen(8000);