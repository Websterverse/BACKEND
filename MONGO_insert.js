// const db_connect = require('./mongo_connection')
// const insert = async ()=>{
// const db =  await db_connect() ;
//  const result =   await db.insertOne({name : "KR$NA" , area : "MASS APPEAL "})
// //  console.log(result)

// if(result.acknowledged){
//     console.log("DATA IS INSERTED SUCCESSFULLY ")
// }

// }
// insert()

const db_connect = require('./mongo_connection')
const insert = async ()=>{
const db =  await db_connect() ;
 const result =   await db.insertMany([{name : "KALAM INK" , area : "URBAN MUSIC"},
 {name : "KSHMR" , area : "KSHMR PRODUCTION"}
])
//  console.log(result
if(result.acknowledged){
    console.log("DATA IS INSERTED SUCCESSFULLY ")
}
}

insert()