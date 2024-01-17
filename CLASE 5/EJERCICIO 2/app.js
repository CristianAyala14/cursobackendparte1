import UserManager from "./managers/usersManager.js";
const path = "./files/Users.json";
const userManager= new UserManager(path);

const env = async ()=>{
    let user ={
        name: "Luis",
        lasname: "Ayala",
        username: "luis_sol",
        password: "123456",
    }
    //let clgUsers = await userManager.createUser(user) CREAR
    //await userManager.DeleteUser(2); ELIMINAR 

}
env();