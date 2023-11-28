 module.exports = (req , resp , next)=>{
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
    