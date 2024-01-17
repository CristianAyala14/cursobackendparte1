import mongoose from "mongoose";
const studentsSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    //referencia: !!!!
    //courses type array que traera un objeto que contendra una propiedad course que contendra la referencia, o por default un array vacio.
    courses: {
        type: [
            {
                course: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "courses"
                }
            }
        ],
        default: []
    }
})
//estoy agregando el middelware a la operacion find de manera que solo uncionara cuando este buscando el documento, asi evitamos lentitud en operaciones que n lo necesiten .
studentsSchema.pre("findOne", function(){
    //la palabra this hace referencia a este documento. Es por ello que la operacion populate funcionara exactamente igual a como la llamamos antes.
    this.populate("courses.course");
})

const studentsModel = mongoose.model("students", studentsSchema);
export default studentsModel;