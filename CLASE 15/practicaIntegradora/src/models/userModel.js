import mongoose from "mongoose";

const collection = "User";
const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email:{
        type: String,
        unique: true
    },
    //type de imagenes que vienen con multer
    thumbnail: String

})

const userModel = mongoose.model(collection, userSchema);

export default userModel;