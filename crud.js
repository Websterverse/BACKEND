const fs = require('fs')
const path = require('path')

// const dirpath = path.join(__dirname , "crud")
// console.log(dirpath)

const dirpath = path.join(__dirname , "crud");
const file = dirpath  + "/hi.text" ;
// fs.writeFileSync(file , "HI  , HOW ARE YOU ?");

// fs.readFile(file , "utf-8",(err , files)=>{
// console.log(files)

// })

// append data from file //

// fs.appendFile(file , " MIEN THEEK HOO .... 😊", (err)=>{
// if(!err){
// console.log("ERROR IS NOT THERE");
// }

// })


// rename file name //

// fs.rename(file , dirpath + "/CRUD.txt" , (err)=>{
// if(!err){
// console.log("ERROR is not there")
// }
// })



// delete file // 
fs.unlinkSync(dirpath + "/CRUD.txt")


