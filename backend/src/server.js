import cors from 'cors';
import express from 'express';
import { connectToDB, db } from './db.js';
const app=express();
app.use(express.json());
app.use(cors());
//check server//
app.get('/',(req,res)=>{
    res.send("server is running")
})

// collection name -{details} and db name -{dashboarddata}


app.post("/full/:details",async(req,res)=>{
    const result = await db.collection("details").findOne({Name :req.params.details});
    res.json(result);


})






connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("Server Running At port 8000");
    })
})