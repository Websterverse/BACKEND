const db_connect = require("./mongo_connection");

const remove =  async ()=>{
const result = await db_connect(); 
const response = await result.deleteOne({name : "GOT"});
if(response.acknowledged){
    console.log("DATA DELETED SUCCESSFULLY !!!!!!! ")
}
}


remove()
