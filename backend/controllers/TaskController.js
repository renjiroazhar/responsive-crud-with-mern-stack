import Task from "../models/TaskModel.js";

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
}

export const getTasksById = async (req, res) => {
    try {
        const tasks = await Task.findById(req.params.id);
        res.json(tasks);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

export const saveTasks = async (req, res) => {
    const tasks = new Task(req.body);
    try {
        const insertedTask = await Task.save();
        res.status(201).json(insertedTask);
    } catch(error) {
        res.status(400).json({message: error.message});
    }
}

export const updateTasks = async (req, res) => {
    try {
        const updateTask = await Task.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updateTask);
    } catch(error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteTasks = async (req, res) => {
    try {
        const deleteTask = await Task.deleteOne({_id: req.params.id});
        res.status(200).json(deleteTask);
    } catch(error) {
        res.status(400).json({message: error.message});
    }
}