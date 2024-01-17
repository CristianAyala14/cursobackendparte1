import mongoose from "mongoose";

const collection = "users";
const userSchema = new mongoose.Schema({
    //para facilitar busqueda por indiice, hacemos: esto es la indexacion, que le damos a una propiedad del documento el valor index por el cual sera buscado y tiene que ser un valor estrategico para el contexto.
    first_name: {
        type: String,
        index: true
    },
    last_name: String,
    email: String,
    gender: String
});

const userModel = mongoose.model(collection, userSchema)
export default userModel;



