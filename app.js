const express=require('express');
const app=express();
const connectDB=require('./db/connect')
require('dotenv').config();
const port =5000;
app.use(express.json());
const tasks=require('./routes/tasks');

app.use("/api/v1/tasks",tasks);

const start =async()=>{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>console.log("server started . . ."))
}
start();

