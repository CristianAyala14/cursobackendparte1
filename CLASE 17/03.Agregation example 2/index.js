/*
CONSIGNA: 
1-Ordenar db studenst calificaciones de mejor a peor 
2-Obtener a los estudiantes agrupados por grupo
3-Obtener el promedio de los estudiantes del grupo 1b
4-Obener el promedio de los estudiantes del grupo 1A
5-Obtener el promedio generla de todos los estudiantes
6-Promedio de hombres
7-Promedio de mujeres
*/


import mongoose from "mongoose"
import studentsModel from "./studentsModel.js"
import {students} from "./data.js"

const MONGO = "mongodb+srv://cristianpabloayala:nolimit14@cluster1.3xzue7l.mongodb.net/PruebaAgregation";
const main = async()=>{
    await mongoose.connect(MONGO);
    await studentsModel.insertMany(students);


//1
    const resultOne = await studentsModel.aggregate([
        {$sort: {grade:-1}} //ordenado
    ])

    //console.log(resultOne)
//2
    const resultTwo = await studentsModel.aggregate([
        {$group: {_id: "$group", count: {$count: {} }}}
    ])
    //console.log(resultTwo)
//3
    const resultThree = await studentsModel.aggregate([
        {$match: {group: "1B"} },
        {$group:{_id: {}, avg: {$avg: "$grade"}}}
    ])
    //console.log(resultThree)
//4
const resultFour = await studentsModel.aggregate([
    {$match: {group: "1A"} },
    {$group:{_id: {}, avg: {$avg: "$grade"}}}
])
    //console.log(resultFour)
//5
const resultFive = await studentsModel.aggregate([
   
    {$group:{_id: "all", avg: {$avg: "$grade"}}}
])
    //console.log(resultFive)
//6
const resultSix = await studentsModel.aggregate([
    {$match: {gender: "Female"} },
    {$group:{_id: {}, avg: {$avg: "$grade"}}}
])
    //console.log(resultSix)
//7
const resultSeven= await studentsModel.aggregate([
    {$match: {gender: "Male"} },
    {$group:{_id: {}, avg: {$avg: "$grade"}}}
])
console.log(resultSeven)


    await mongoose.connection.close();
}
main();