const fs = require('fs')
const path = require('path')
// console.log(path)
const dirpath = path.join(__dirname ,"files")
// console.log(dirpath)


// for(var i = 1 ; i< 6 ; i++){

// fs.writeFileSync( dirpath +  "/hello" + i + ".txt" , i +  "A SIMPLE FILE CREATTED WITH FOR LOOP")

// }


fs.readdir(dirpath , (err, files)=>{

    // console.log(files)

files.forEach((item)=>{
console.log(item)

})
})






// console.log(__dirname)
