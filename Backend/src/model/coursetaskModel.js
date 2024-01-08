import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    taskName: {
        type: String,
        required: true,
    }
}
)

const TaskModel = mongoose.model("Task", taskSchema)

export default TaskModel;