import mongoose from "mongoose";

const Task = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});

export default mongoose.model('Task', Task);