const contador = ()=>{
    let counter=1
    console.log("Realizo la operacion")
    let timer = setInterval(()=>{
        console.log(++counter)
        if(counter>5){
            clearInterval(timer)
        }
    },3000)
}

console.log("inicio la tarea")
contador()
console.log("inicio la tarea")

