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
app.get("/full/:detail",async(req,res)=>{
    const result = await db.collection("details").findOne({Mail_id:req.params.detail});
    res.json(result);
})
app.get("/signin/:email/:password",async(req,res)=>{ 
    const details = await db.collection("details").findOne({Mail_id:req.params.email,Password:req.params.password});
    res.json(details);
})
app.post("/signup/:name/:email/:number/:dob/:password/:gender/:user_id",async(req,res) =>{
    try{
     const existingUser = await db.collection('details').findOne({ Mail_id:req.params.email });
      if (existingUser) {
        // If the user already exists, return an error response
        return res.status(400).json({ error: 'User with this email already exists' });
      }
      const jsonData = {
        "Name": req.params.name,
        "Mail_id": req.params.email,
        "Points": 0,
        "Streak": 0,
        "User_id": req.params.user_id,
        "Password" :req.params.password ,
        "Gender": req.params.gender,
        "Number":req.params.number,
        "Dob":req.params.dob,
        "Week": [
          {
            "week": "week1",
            "days_attended": 0,
            "points_scored": 0
          },
          {
            "week": "week2",
            "days_attended": 0,
            "points_scored": 0
          },
          {
            "week": "week3",
            "days_attended": 0,
            "points_scored": 0
          },
          {
            "week": "week4",
            "days_attended": 0,
            "points_scored": 0
          },
        ],
        "Month": [
          {
            "month": "jan",
            "days_attended": 0,
            "points_scored": 0
          },
          {
            "month": "feb",
            "days_attended": 0,
            "points_scored": 0
          },
          {
            "month": "mar",
            "days_attended": 0,
            "points_scored": 0
          },
          {
            "month": "apr",
            "days_attended": 0,
            "points_scored": 0
          },
          {
            "month": "may",
            "days_attended": 0,
            "points_scored": 0
          },
          {
            "month": "jun",
            "days_attended": 0,
            "points_scored": 0
          },
          {
            "month": "jul",
            "days_attended": 0,
            "points_scored": 0
          },
          {
            "month": "aug",
            "days_attended": 0,
            "points_scored": 0
          },
          {
            "month": "sep",
            "days_attended": 0,
            "points_scored": 0
          },
          {
            "month": "oct",
            "days_attended": 0,
            "points_scored": 0
          },
          {
            "month": "nov",
            "days_attended": 0,
            "points_scored": 0
          },
          {
            "month": "dec",
            "days_attended": 0,
            "points_scored": 0
          }
        ],
        "Year": [
          {
            "year": "2023",
            "days_attended": 0,
            "points_scored": 0
          },
          {
            "year": "2024",
            "days_attended": 0,
            "points_scored": 0
          }
        ]
      };
      await db.collection("details").createIndex({ keywords: 'text' });
    const details = await db.collection("details").insertOne(jsonData);
    res.json(details);
    
    }
    catch(error){
      console.error("Error inserting data:", error);
      res.status(500).json({ error: 'Server error' });
    }
    
})
app.post('/update/:email/:temp',async (req,res)=>{
  
    const details = await db.collection("details").findOneAndUpdate({Mail_id:req.params.email},{$set:{Points:req.params.temp}});
    res.json(details);
})

app.get("/get/:searchkey",async(req,res)=>{
    const query = { $text: { $search: req.params.searchkey } };
    const searchResult = await db.collection('articles').find(query).toArray();
    res.send(searchResult);
}) 
app.get('/internalsearch/:mail/:searchkey', async (req, res) => {
    const query = {
      $text: { $search: req.params.searchkey },
      Mail_id: req.params.mail
    };
    
    try {
      const searchResult = await db.collection('details').find(query).toArray();
      res.send(searchResult);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  });
  
app.post('/updatepass/:email/:dob/:newpassword', async (req, res) => {
    const dobdata = await db.collection('details').findOne({ Mail_id: req.params.email });
  
    if (dobdata && dobdata.Dob === req.params.dob) { // Check if dobdata is defined
        const details = await db.collection('details').findOneAndUpdate(
            { Mail_id: req.params.email },
            { $set: { Password: req.params.newpassword } }
        );
        res.json(details);
    } else {
        res.status(400).json({ error: 'Invalid email or date of birth' });
    }
  });

connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("Server Running At port 8000");
    })
})