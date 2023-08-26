import { MongoClient } from "mongodb";
let db; 
async function connectToDB(cb){
    const url = "mongodb+srv://kotaanilreddy93:Anil*1234@cluster0.j5owezv.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("dashboarddata");
    cb();
}
export { connectToDB, db };