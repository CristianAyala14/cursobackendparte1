import {fileURLToPath} from "url";
import {dirname} from "path";
import multer from "multer";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//multer config donde van las imagenes:
const storage = multer.diskStorage({
    //funcion 1. 3 parametros. el tercero es el callback
    destination: function(req,file,cb){
        cb(null,`${__dirname}/public/images`);
    },
    //funcion 2
    filename: function(req,file,cb){
        cb(null,`${Date.now()}-${file.originalname}`)
    }
})


export const uploader = multer({storage});
export default __dirname;

