const mongoose=require('mongoose');
const Task=require('../models/Task');

const getAllTasks= async (req,res)=>{
    try {
         const x=await Task.find();
        res.status(201).json(x);
    
    } catch (error) {  
        
    }
}
const createTask=async (req,res)=>{
    try {
        const x=await Task.create({
            name:"bmw",
            completed:true
        });
        res.status(201).json(x);
    } catch (error) {
        
    }
}

const getTask=async (req,res)=>{
     try {
    //     const _id=req.params.id;
    //     const x=await Task.findOne({_id}); 
    const a =req.params.name;
    const x= await Task.findOne({name:a});
    res.status(201).json(x);  
    } catch (error) {  
        
    }
}


const updateTask=async(req,res)=>{
    try {
        const a=req.params.id;
        const updated={
            name:"asif",
            completed:false
        }
        const x=await Task.updateOne(a,updated,{new:true}); 
        res.status(201).json(x);
    } catch (error) {
        
    }
}

const deleteTask=async (req,res)=>{
    try {
        const a=req.params.name;
        const x=await Task.findOneAndDelete({name:a}); 
        res.status(201).json(x); 
    } catch (error) { 
        
    } 
}
module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getTask
}