const express = require('express')
const app = express()
const route = express.Router()  
const middle_ware = require('./MIDDLE_WARE')

route.use(middle_ware);



app.get("/" , (req , resp)=>{

resp.send("HELLO I AM KARTIK ")
})

route.get("/about" , (req , resp)=>{

resp.send("about page")
})

route.get("/contact" , (req , resp)=>{

resp.send("contact page")
})

app.use("/", route)

app.listen(4000)


