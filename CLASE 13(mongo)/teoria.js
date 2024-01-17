 /* creo mi base de datos */
/* use baseCRUD */
db.createCollection("mascotas")
db.mascotas.insertOne({nombre: "Rocko", especie: "Policia", edad: 8})
db.mascotas.insertMany([{nombre: "Thom", especie: "Policia", edad: 15},{nombre: "Rita", especie: "no", edad: 14}])
db.mascotas.find({especie: "Policia"})
db.mascotas.countDocuments()

/* 
Mongo db: Operadores para filtros  de query:

$and (Operador lógico AND)
{$and: [{criterio1}, {criterio2}]}
$or (Operador lógico OR)
{$or: [{criterio1}, {criterio2}]}
$lt (Valores menores que un valor específico)
$lte (Valores menores o iguales a un valor específico)
$gt (Valores mayores que un valor específico)
$gte (Valores mayores o iguales a un valor específico)
$ne (Valores que no son iguales a un valor específico)
$eq (Valores que son iguales a un valor específico)
$exists (Basado en la existencia de un campo)
$in (Valores que están en un array específico)
    {key: {$in: [valor1, valor2]}}
$nin (Valores que no están en un array específico)
$size (Con un número específico de elementos en un array)
$all (Coincide con todos los valores dentro de un array)
$elemMatch (Coincide con algún valor definido dentro de un array en un documento)

Ejemplos de busqueda con filtros convinados: 

-db.coll.find({name:{$not:{$eq:"max"}}}) //buscar todos los que no sean de nombre max

-db.coll.find({$or:[{"year": 1958},{"year": 1959}]}) //buscar el que year sea 1958-59

-db.coll.find({
    $and:[
        {$or:[ {cantidad:{$lt:10}},{cantidad:{$gt:50}} ] },
        {$or:[ {sale:true},{price:{$lt:5}} ] },
    ]
}]

-db.coll.find({name: {$exist: true}})


*/


// UPDATE //
// Se puede actualizar de a 1 o de a muchos.
/*
db.colecction.updateOne(query,update,option)
db.colecction.updateMany(query,update,option)

query: sirve para filtrar que elemenos se actualizaran
update: apartado para indicar que actualizar de los documentos que cumplen con el query
option: opciones a tomar en cuenta para la actualizacion(Aca aparece el upsert, osea si no existe, el upsert crea el valor como regular)


*/

//DELETE //
/*
db.colecction.updateOne(query,update,option)
db.colecction.updateMany(query,update,option)
*/

