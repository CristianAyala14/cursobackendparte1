//example 1 propio map
let arregloDePrueba = [1,2,3,4,5]
function miFuncionMap(arreglo, callback){
    let nuevoArreglo=[]
    for(let i=0; i<arreglo.length; i++){
        let nuevoValor= callback(arreglo[i])
        nuevoArreglo.push(nuevoValor)
    }
    return nuevoArreglo;
}

//pongo a pruega example 1 
let nuevoArregloPropio=miFuncionMap(arregloDePrueba, x=>x*2 );
//console.log(nuevoArregloPropio)

//example 2. igual solo que con map
let nuevoArregloConMap = arregloDePrueba.map(x=>x*2)

//si queremos que la funcion se ejecute sobre el mismo arreglo y no tener que pasarlo como parametro, debemos agregar nuestra nueva funcion en el prototipo de objeto array.
Array.prototype.miPropiaFuncionMap= function(callback){
    let nuevoArreglo=[]
    for(let i=0; i<this.length; i++){
        let nuevoValor= callback(this[i])
        nuevoArreglo.push(nuevoValor)
    }
    return nuevoArreglo;    
}
let arregloPrueba = [1,2,3,4,5,6,7,8,9]
let nuevosValores = arregloPrueba.miPropiaFuncionMap(x=>x+1)
//console.log(nuevosValores)


//PROMESAS

const dividir = (dividendo, divisor)=>{
    return new Promise((resolve,reject)=>{
        if(divisor===0){
            reject("no se puede dividir por 0")
        }else{
            resolve(dividendo/divisor)
        }
    })
}

dividir(5,2).then(resultado=>{
    console.log(resultado)
}).catch(error=>{
    console.log(error)
})


//example 2 
const data = new Promise(function(resolve, reject){
    setTimeout(()=>resolve(1),1000)
}).then(resultado=>{
    console.log(resultado)
    return resultado
}).then(resultado2=>{
    console.log(resultado2+10)
})


//ASYNC AWAIT
const calculo = async()=>{
    try{
        const resultado = await dividir (5,0)
        console.log(resultado)
    }catch(error){
        console.log(error)
    }
}
