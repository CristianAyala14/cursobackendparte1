import ManagerUsuarios from "./managers/managerUsuarios.js"; //agregar siempre .js

const manager = new ManagerUsuarios();
const env = async()=>{
    let primerConsulta = await manager.consultarUsuarios();
    console.log(primerConsulta)
    let user ={
        nombre: "luis",
        apellido: "peres",
        edad: 32,
        curso: "backend",
        id: 1,
    }
    let result = await manager.crearUsuarios(user)
    console.log(result)
}
env();
