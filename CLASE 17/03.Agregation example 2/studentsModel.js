import mongoose from "mongoose";
const collection = "students";
const studentSchema = new mongoose.Schema({
    firts_name: String,
    last_name: String,
    email: String,
    gender: String,
    grade: Number,
    group: String
})

const studentsModel = mongoose.model (collection, studentSchema);
export default studentsModel;