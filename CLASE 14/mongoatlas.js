/*CLASE 12
npm install mongoose. La coneccion de nuestro proyecto con el mongoDB. es decir, mongo db es un gran almacen de datos,
y mongoose es una libreria que te ayuda a interactuar estructuradamente desde tu proyecto , con la base de datos, que puede ser MONGODB local en tu pc,
o mongoAtlas, que es la version de mongo pero en la nuve.

1- creamos dentro de nuestro proyecto la carpeta "models" y dentro un archivo "user.model.js"
2- en este archivo: Codeamos lo siguiente que es un formato que se repite siempre.
	import mongoose from "mongoose";
	//coleccion

*/
	const collection = "User";
	//esquema
	const userSchema = new moongose.Schema({
		first_name:String,
		last_name:String,
		email: {
			type: String,
			unique:true
		}
	
	})
	//modelo de usuario: Lo que nos permite conectarnos a la base de usuario y acceder a borrado actualizacion y mas funcionalidades.
	const userModel = moongose.model(collection, userSchema);

	export default userModel;
/*
3-Ahora en rutas: si bien tenemos una ruta que es de vistas, ahora creamos users.Route.js (ruta de usuarios como veniamos haciendo)
pero es aqui donde vamos a importar userModel del punto 2.
Donde antes importabamos el manager (que mediante sus metodos se encargaba de obtener los datos) ahora importamos el modelo.
Entonces ahora quedaria asi:
Users.route.js:   */
	import {Router} from "express";
	import userModel from ":./models/user.model.js"; 

	const router = Router();
	router.get("/", async (req,res)=>{
	try{
		const users = await userModel.find();
		res.send({users})
	    
	}catch(error){console.log("cannot get users with mongoose" + error)}})



	export {Router as UserRouter};
    /*
Con esto ya tendriamos nuestra primera devolucion desde la base de datos.

4-En app importariamos: */

import userRouter from "./routes/users.route.js";
app.use("/api/user", userRouter);

/*
Y ya tenemos nuestro model conectado a la ruta, y la ruta conectada al servidor. 

5- Bien, ahora solo falta conectar mongoAtlas con nuestro proyecto.
En overview de nuestro proyecto en mongo atlas: el proyecto o DB. se crea desde database "create" creo que ya lo hice.
a-connect.
b-en connect: drivers
c-en el punto 3 copiamos esa especie de link. (esto lo copiamos y vamos a ir a llevarlo a nuestro proyecto por que
sera la coneccion con mongoAtlas. La manera sera en app: 
	const MONGO = " link hasta .net/ el resto se borra y se elige el nombre de la base de datos. "; (seria como hacer use y poner base de datos con mongo terminal q ya vimos.
Si no reemplazaramos el nombre q viene, usaria una base de datos propia generica de atlas.
Entonces ahora vamos a app y: */
	import mongoose from "mongoose"; 
	const MONGO = " link ";
	const connection = mongoose.connect(MONGO)

/*
Ahora terminamos con el CRUD:

Ahora si yo queiro agregar mas funcionalidad con mi mongoose y mongooseAtlas desde la ruta voy agregando.
Ejemplo de ruta post para guardar datos: */

router.post("/", async(req,res)=>{
        const {first_name, last_name, email} = req.body;
        if(!first_name || !last_name || !email){
        return res.status(400).send({error:"valores incompletos"})
        }

        //si trajo hacemos:
        const user = {first_name, last_name, email}
        const result = await userModel.create(user);
        res.send({result})
        
    })


//Esto se puede probar en POSTMAN.