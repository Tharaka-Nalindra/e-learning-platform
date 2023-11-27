import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    name: String,
    email:String,
    password: String
})

const StudentModel =mongoose.model("students",studentSchema)

export default StudentModel;