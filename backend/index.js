import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import TaskRoute from "./routes/TaskRoute.js";

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/test_mern_stack', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database connected'));

app.use(cors());
app.use(express.json());
app.use(TaskRoute);

app.listen(5000, () => console.log('Server up and running'));

app.listen(PORT, () => console.log('Connected to http://localhost:${PORT}'));