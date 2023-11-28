const express = require("express")
const app = express();

app.get("" , (req , resp)=>{

resp.send("<h2>THIS IS A HOME PAGE </h2>   " + req.query.name );
// resp.send("MY NAME IS -> " , req.query.name);



})

app.get("/about" , (req , resp)=>{

resp.send(`THIS IS A ABOUT PAGE <button>CLICKME<button>  `);

})

app.get("/contact" , (req , resp)=>{

resp.send("THIS IS A CONTACT PAGE");

})


app.listen(2000);
