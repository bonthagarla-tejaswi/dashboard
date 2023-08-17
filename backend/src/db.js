import { MongoClient } from "mongodb";
let db; 
async function connectToDB(cb){
    const url = "mongodb+srv://anilreddygree:6302423327*Aa@cluster0.mk1a8vu.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("dashboarddata");
    cb();
}
export { connectToDB, db };