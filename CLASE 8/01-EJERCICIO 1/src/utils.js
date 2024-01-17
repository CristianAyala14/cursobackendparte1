//proceso para hacer la ruta absoluta "public static"
//para q te tome la url exacta
import {fileURLToPath} from "url";
import {dirname} from "path";
//multer (middleware  de app. es desarrolaldo por tercero)
//Multer es un middleware para el manejo de formularios de tipo multipart/form-data, que se utiliza comúnmente para el envío de archivos y datos binarios a través de formularios HTML. Este middleware es especialmente útil cuando trabajas con aplicaciones web que permiten a los usuarios cargar imágenes, archivos, o cualquier otro tipo de datos binarios.
//npm install multer en la carpeta raiz del proyecto
import multer from "multer";

//lo de public static
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//multer config:
const storage = multer.diskStorage({
    destination: function(req,file,db){
        db(null,`${__dirname}/public/images`);
    },
    filename: function(req,file,db){
        console.log(file)
        db(null,`${Date.now()}-${file.originalname}`)
    }
})
//multer funcionalidad:
export const uploader = multer({storage});


//lo de dirname
export default __dirname;