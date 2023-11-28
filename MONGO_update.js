const db_connect = require("./mongo_connection")
const update = async () => {
    const result = await db_connect();
    const response = await result.updateOne({ name: "RAFTAAR" }, { $set: { name: "BADSHAH" } })

    if (response.acknowledged) {
        console.log("DATA UPDATED SUCCESFULL !!!!! ")
    }
}

update()