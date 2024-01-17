//funcion asincrona
const temporizador = (callBack)=>{
    setTimeout(()=>{
        callBack()
    },3000)
}
const operacion = ()=> console.log("realizando la operacion")
//"inicio de tarea seria sincrona"
console.log("Inicio la tarea")
temporizador(operacion)
console.log("tarea finalizada")


