import mongoose from "mongoose";
import studentsModel from "./models/studentsModel.js";
import courseModel from "./models/courseModel.js";

const createStudent = async()=>{
    await studentsModel.create({
        first_name: "Carlos",
        last_name: "Chevegara",
        email: "cheve223@gmail.com",
        gender: "None"
    })
}

const createCourse = async()=>{
    await courseModel.create({
        title: "backend",
        description: "Programacion re piola pa ti",
        difficulty: 5,
        topics: ["nodeJS", "Express", "Mongo"],
        professor: "Bidabehere juan"
    })
}

//ahora vamos a agregar el curso al estudiante y aplicar la uncion Populate de mongoose.
//creamos la uncion que se encargara de esto y la sentenciamos en el main: 
const addCourseToStudent = async()=>{
    const student = await studentsModel.findById("6595ab69f2e13d867459b4c1");
    student.courses.push({course: "6595ab69f2e13d867459b4c3"}) //aqui ocurre la referencia, y se encaja con el modelo de datos que habiamos hecho de student.
    await student.save() //esta linea no la explico.
}


const MONGO = "mongodb+srv://cristianpabloayala:nolimit14@cluster1.3xzue7l.mongodb.net/PruebaPopulate";

const main = async ()=>{
        await mongoose.connect(MONGO) 
        //await createStudent(); 1 orden
       // await createCourse(); 2 orden
       //await addCourseToStudent();3 orden


        //los id son los que se generan luego de aplicar las funciones en el main
        // id curso: 6595ab69f2e13d867459b4c3
        //id estudiante: 6595ab69f2e13d867459b4c1

       //ahora lo buscamos: //el .populate() trae no solo la info de id sola del student: course (aqui una salvedad: se crea un id de la referencia curso a student autogenerado que no usamos.). sino q te trae el curso completo.
       
       
       //const student = await studentsModel.findById("6595ab69f2e13d867459b4c1").populate("courses.course") //antes de esto se ejecutaria el PRE.
       const student = await studentsModel.findById("6595ab69f2e13d867459b4c1")
       console.log(JSON.stringify(student, null,"\t") )
        mongoose.connection.close();
}

main();

//podemos hacer un middleware "PRE" para no tener uqe hacer .populate o poner ids y eso que hicimos. Porque puede ser tedioso. 
//el pre se ejecuta antes de finalizar el procesado y entrega de la operacion. Este es compatible con la operacion ind que acostumbramos utilizar.
//el pre iria dentro del schema.