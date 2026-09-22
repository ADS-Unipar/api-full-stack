const { Op } = require("sequelize");
const Task = require("./tasksModel");


    
const createTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;
        const task = await Task.create({ title, description, status });
        res.status(201).json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar a tarefa' });
    }
};

const getAllTasks = async (req, res) => {
    try {
        const statusFilter = req.query.status;
        const searchFilter = req.query.search;
        let whereClause = {};
        if (statusFilter !== undefined) {
            whereClause.status = statusFilter;
        }
        if (searchFilter !== undefined) {
            whereClause.title = { [Op.like]: `%${searchFilter}%` };
        }
        const tasks = await Task.findAll({ where: whereClause });
        res.status(200).json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar as tarefas' });
    }
};

const getTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByPk(id);
        if (!task) {
            return res.status(404).json({ error: 'Tarefa não encontrada' });
        }
        res.status(200).json(task);
    } catch (error) {
        console.error(error);   
        res.status(500).json({ error: 'Erro ao buscar a tarefa' });
    }
};

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, status } = req.body;
        const task = await Task.findByPk(id);
        if (!task) {
            return res.status(404).json({ error: 'Tarefa não encontrada' });
        }
        await task.update({ title, description, status });
        res.status(200).json(task);
    }   catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar a tarefa' });
    }
};

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByPk(id);
        if (!task) {
            return res.status(404).json({ error: 'Tarefa não encontrada' });
        }
        await task.destroy();
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao deletar a tarefa' });
    }
};

const changeTaskStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const task = await Task.findByPk(id);
        if (!task) {
            return res.status(404).json({ error: 'Tarefa não encontrada' });
        }
        await task.update({ status });
        res.status(200).json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar o status da tarefa' });
    }
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask,
    changeTaskStatus
};      