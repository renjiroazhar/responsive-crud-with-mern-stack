import express from "express";
import {
    getTasks,
    getTasksById,
    saveTasks,
    updateTasks,
    deleteTasks,
} from "../controllers/TaskController.js";

const router = express.Router();

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTasksById);
router.post('/tasks', saveTasks);
router.patch('/tasks/:id', updateTasks);
router.delete('/tasks/:id', deleteTasks);

export default router;