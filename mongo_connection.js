// COMPLICATED CODE 💀💀💀💀 ... 
const { MongoClient } = require('mongodb')
// path of mongodb//
const url = "mongodb://localhost:27017";
// passing url in mongodb // 
const client = new MongoClient(url)
// BASIC CODE ..... 
async function get_data() {
    let result = await client.connect();
    let db = result.db('empire')
    return db.collection('valhela')
}
module.exports = get_data; 
