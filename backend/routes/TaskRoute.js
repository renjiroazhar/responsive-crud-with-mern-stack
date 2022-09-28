import express from "express";
import {
    getTasks,
    getTaskById,
    saveTask,
    updateTask,
    deleteTask,
} from "../controllers/TaskController.js";

const router = express.Router();

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTaskById);
router.post('/tasks', saveTask);
router.patch('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

export default router;