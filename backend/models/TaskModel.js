import mongoose from "mongoose";

const Task = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    comment: {
        type: String,
        required: false
    }
});

export default mongoose.model('Tasks', Task);