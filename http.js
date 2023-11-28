const { default: chalk } = require('chalk');
const http = require('http');
http.createServer((req , resp)=>{

resp.write("<h1>KING IS IN THE BUILDING</h1>")
resp.end();    


}).listen(6800);

// console.log(chalk.magenta("KING"))

