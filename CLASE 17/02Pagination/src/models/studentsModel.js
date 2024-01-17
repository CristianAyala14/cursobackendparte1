import mongoose from "mongoose";
//importamos mongoose paginate en el modelo:
import mongoosePaginate from "mongoose-paginate-v2";
const collection = "students";
const studentSchema = new mongoose.Schema({
    firts_name: String,
    last_name: String,
    email: String,
    gender: String,
    grade: Number,
    group: String
})
//agrego el plugin de mongoose Paginate
studentSchema.plugin(mongoosePaginate);
const studentsModel = mongoose.model (collection, studentSchema);
export default studentsModel;