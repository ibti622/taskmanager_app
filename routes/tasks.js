const express=require('express')
const{getAllTasks,createTask,updateTask,deleteTask,getTask}=require('../controllers/tasks2')
const router=express.Router()
router.route('/').get(getAllTasks).post(createTask);
router.route('/:name').get(getTask).delete(deleteTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports=router;      