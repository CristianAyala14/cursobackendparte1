import fs from "fs";
import crypto from "crypto";
import { json } from "node:stream/consumers";

export default class UserManager{
    constructor(path){
        this.path = path;
    }

    getUsers = async()=>{
        if(fs.existsSync(this.path)){
            const data = await fs.promises.readFile(this.path, "utf-8")
            const users = JSON.parse(data) //convierto en objeto
            return users
        }else{
            return []
        }
    }

    createUser = async(user)=>{
        const users = await this.getUsers();
        if(users.length === 0){
            user.id = 1
        }else{
            user.id = users[users.length-1].id+1;
        }

        //aca creamos una palabra clave a una nueva propiedad para usuario: "SALT" , que servira para encriptar la contraseña. La contraseña la encriptaremos y remplazremos en la propiedad password. Creamos salt, porq para encritar una contraseña comohice mas abajo, se necesita de una palabra clave
        user.salt = crypto.randomBytes(128).toString("base64") //creamos una palabra random
        user.password = crypto.createHmac("sha256",user.salt).update(user.password).digest("hex") //encriptamos una contraseña con tipo de encriptado "sha256", en el update . el digest es forma de convertirlo -.
        users.push(user);
        await fs.promises.writeFile(this.path, JSON.stringify(users,null,"\t"))
        return users;
    }
    //validar usuario
    CheckUser = async(username, password)=>{
        const users = await this.getUsers();
        const userIndex = users.findIndex(el=> el.username  == username)
        //findindex devuelve -1 si no existe o la posicion index
        if(userIndex===-1){
            console.log("El usuario no existe")
            return "User does not exist. :/"
        }
        const user = users[userIndex];
        //para validar q sea real hay q chekear que la password sea igual a la q tenemos guardad o hashada
        const newHash = crypto.createHmac("sha256",user.salt).update(password).digest("hex")
        //ahora tenemos la contraseña q nos paso el usuario de la misma forma q deberia estar encriptada
        if(newHash === user.password){
            console.log("Logeado")
        }else{
            console.log("Contraseña invalida")
        }
    }

    DeleteUser = async(idUser)=>{
        try {
            const users = await this.getUsers();
            const userIndex = users.findIndex(el=>el.id == idUser )
            if(userIndex!==-1){
                users.splice(userIndex,1)
                await fs.promises.writeFile(this.path, JSON.stringify(users, null, "\t"))
                console.log("El usuario fue eliminado")
                return "Usuario eliminado"
            }else{
                console.log("EL usuario no existe")
                return "El usuario no existe"
            }

        } catch (error) {
            console.log("error")
        }
    }

}