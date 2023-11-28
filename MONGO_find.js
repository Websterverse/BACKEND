
const get_data =require("./mongo_connection")


// const { MongoClient } = require('mongodb')

// // path of mongodb//
// const url = "mongodb://localhost:27017";

// // passing url in mongodb // 

// const client = new MongoClient(url)


//  // BASIC CODE ..... 
// async function get_data() {

//     let result = await client.connect();
//     let db = result.db('empire')
//     let collection = db.collection('valhela')
//     let respone = await collection.find({}).toArray()

//     console.log(respone);
// }

// get_data();



// COMPLICATED CODE 💀💀💀💀 ... 


// const { MongoClient } = require('mongodb')

// path of mongodb//
// const url = "mongodb://localhost:27017";

// passing url in mongodb // 

// const client = new MongoClient(url)


//  // BASIC CODE ..... 
// async function get_data() {

//     let result = await client.connect();
//     let db = result.db('empire')
//     return  db.collection('valhela')
    // let collection =   db.collection('valhela')
    // let respone = await collection.find({}).toArray()

    // console.log(respone);
// }
// TRADITIONAL METHOD TO HANDLE PROMISES OF MONGODB 😊😊😊 // 

// get_data().then((resp)=>{
    
    // resp.find({}).toArray().then((data)=>{
        // console.log(data); 
        // })
// })


// MODERN  METHOD TO HANDLE PROMISES OF MONGODB 😳😳😳 // 

const main = async ()=>{

    const data = await get_data();
     const info =  await data.find({}).toArray();
console.log(info)

}

main() ; 
