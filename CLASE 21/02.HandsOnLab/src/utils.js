//dirname, multer, bcrypt. se desarrollan aca para poder usarlos en otros lados
import {fileURLToPath} from "url";
import {dirname} from "path";
import bcrypt from "bcrypt";

//bcrypt (funcion que evuelve hasheada la password)
export const createHash = (password) =>{
    return bcrypt.hashSync(password,bcrypt.genSaltSync(10))
};
    //valida la contraseña
export const validatePassword = (password, user)=>{
    return bcrypt.compareSync(password, user.password)
}
//dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);




export default __dirname;

