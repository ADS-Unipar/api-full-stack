const { Router } = require('express');   
const { getAllTasks, getTaskById, createTask, updateTask, deleteTask, changeTaskStatus } = require('./tasksController');
const validatorMiddleware = require('../middlewares/validatorMiddleware');
const taskSchema = require('./taskValidation');

const tasksRouter = Router();

tasksRouter.get('/', getAllTasks);
tasksRouter.get('/:id', getTaskById);
tasksRouter.post('/',validatorMiddleware(taskSchema) ,createTask);
tasksRouter.put('/:id', validatorMiddleware(taskSchema), updateTask);
tasksRouter.delete('/:id', deleteTask);
tasksRouter.patch('/:id/status', changeTaskStatus);

module.exports = tasksRouter;