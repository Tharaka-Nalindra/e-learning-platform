import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    courseName: {
        type: String,
        required: true,
    }
},
{ timestamps: true}
);

const Course = mongoose.model("Course", postSchema)

export default Course; 