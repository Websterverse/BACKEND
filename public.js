const express = require("express")
const path = require("path")
const app = express()

// console.log(__dirname)

const public_path = path.join(__dirname , "public")
// console.log(public_path ); 

app.use(express.static(public_path));


app.listen(9000);