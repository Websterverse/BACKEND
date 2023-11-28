const express = require('express')
const app = express()

const middle_ware = (req , resp , next)=>{
if(!req.query.age){
    resp.send("PLEASE ENTER THE AGE FIRST FOR ACCESS THIS WEBSITE")
}

    else if(req.query.age >=18){
   resp.send("AGE is " + req.query.age)

    }
    else if(req.query.age <=18){
//    resp.send("AGE is " + req.query.age)
resp.send("YOUR IS LESS THAN 18 ")
    }


    else {
        next();

    }
    console.log("IT IS MIDDLEWARE FUNCTION")
}

// app.use(middle_ware);



app.get("/" , (req , resp)=>{

resp.send("HELLO I AM KARTIK ")
})

app.get("/about" , middle_ware , (req , resp)=>{  // single route middleware // 

resp.send("about page")
})


app.listen(4000)


