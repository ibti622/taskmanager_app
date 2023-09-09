const Task = require('../models/Task')
//while using these mongoose queries like findByIdAndDelete( {_id: a}) dont forget to use brackets {} .
// only Task.findByIdAndUpdate(a, updated,) does'nt need {} brackets inside these() because it already has too much data in () brackets
//queries can be used with id like: await Task.findByIdAndDelete({_id:a}) or
// by using just name like:findOne({name:a})/findOneAndDelete({name:a});
const getAllTasks = async (req, res) => {
    try {

        const x = await Task.find();
        res.status(201).json({ x });

    } catch (error) {
        console.log(error)
    }
}

const createTask = async (req, res) => {
    try {

        const x = await Task.create({
            name: "enzo",
            completed: false
        }) 
        res.status(201).json(x)

    } catch (error) {
        console.log(error)
    }  
}  
const getTask = async (req, res) => {
    try {
        const a = req.params.id
        const x = await Task.findById( {_id: a} )
        res.status(201).json(x)

    } catch (error) {
        console.log(error)
    }
}
const updateTask = async (req, res) => {
    try {
        const updated = {
            name: "ahmed123",
            completed: true
        }
        const a = req.params.id
         //const x = await Task.updateOne({_id:a}, updated)
        
        
        const x = await Task.findByIdAndUpdate(a, updated,)
        res.status(201).json(x)

    } catch (error) {
        console.log(error) 
    }

}


const deleteTask = async (req, res) => {
    try {
        const a = req.params.id
        //const x = await Task.deleteOne({ _id: a })
        
        const x = await Task.findByIdAndDelete( {_id: a})
        res.status(201).json(x);

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getTask
}
//you can use findOne for updating deleting just use andupdate/anddelete with findOne and in the brackets just give their like this ({name:a});