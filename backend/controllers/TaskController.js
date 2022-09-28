import Task from "../models/TaskModel.js";

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
}

export const getTaskById = async (req, res) => {
    try {
        const tasks = await Task.findById(req.params.id);
        res.json(tasks);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

export const saveTask = async (req, res) => {
    const task = new Task(req.body);
    try {
        const insertedTask = await task.save();
        res.status(201).json(insertedTask);
    } catch(error) {
        res.status(400).json({message: error.message});
    }
}

export const updateTask = async (req, res) => {
    try {
        const updateTask = await Task.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updateTask);
    } catch(error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteTask = async (req, res) => {
    try {
        const deleteTask = await Task.deleteOne({_id: req.params.id});
        res.status(200).json(deleteTask);
    } catch(error) {
        res.status(400).json({message: error.message});
    }
}