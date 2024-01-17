// CREATE READ //

/*
Sobre una base de datos llamada "colegio", crear una coleccion "estudiantes" donde se agregaran documentos con los sigueintes datos:
nombre
apellido
curso
edad
correo
sexo
Crear 5 estudiantes (insert many) con los campos mencionados arriba. Ademas crear un estudiante solo con nombre apellido y curso. Es posible?

-Realizar una busqueda para obtener a todos los estudiantes.
-Realizar una busqueda para obtener a todos los estudiantes de sexo H
-Realizar un conteo para obtener el numero de documentos totales.
-Realizar un conteo para obtener el numero de documentos totales que cumplan con el criterio #Es Mujer
*/
<<<<<<< HEAD

use colegio
=======
//use colegio

>>>>>>> a8571cc (21-12-23 23:30pm)
db.createCollection("Estudiantes")
db.estudiantes.insertMany([{
    nombre: "Juan",
        apellido: "Pérez",
        curso: "Quinto",
        edad: 18,
        correo: "juan.perez@email.com",
        sexo: "Masculino"
    },
    {
        nombre: "María",
        apellido: "González",
        curso: "Tercero",
        edad: 16,
        correo: "maria.gonzalez@email.com",
        sexo: "Femenino"
    },
    {
        nombre: "Carlos",
        apellido: "Sánchez",
        curso: "Sexto",
        edad: 19,
        correo: "carlos.sanchez@email.com",
        sexo: "Masculino"
    },
    {
        nombre: "Laura",
        apellido: "Torres",
        curso: "Segundo",
        edad: 15,
        correo: "laura.torres@email.com",
        sexo: "Femenino"
    },
    {
        nombre: "Roberto",
        apellido: "Ramírez",
        curso: "Cuarto",
        edad: 17,
        correo: "roberto.ramirez@email.com",
        sexo: "Masculino"
    }])
db.Estudiantes.insertOne({nombre: "Pedro", apellido: "Pacheco", curso: "Literatura"})
db.Estudiantes.find().pretty()
db.Estudiantes.find({sexo: "Masculino"})
db.Estudiantes.countDocuments()
db.Estudiantes.countDocuments({sexo: "Femenino"})
db.Estudiantes.insertMany([{
    nombre: "Ana",
    apellido: "López",
    curso: "Primero",
    edad: 14,
    correo: "ana.lopez@email.com",
    sexo: "Femenino"
},
{
    nombre: "Pedro",
    apellido: "Martínez",
    curso: "Séptimo",
    edad: 20,
    correo: "pedro.martinez@email.com",
    sexo: "Masculino"
},
{
    nombre: "Sofía",
    apellido: "Díaz",
    curso: "Quinto",
    edad: 18,
    correo: "sofia.diaz@email.com",
    sexo: "Femenino"
},
{
    nombre: "Jorge",
    apellido: "Castro",
    curso: "Tercero",
    edad: 16,
    correo: "jorge.castro@email.com",
    sexo: "Masculino"
},
{
    nombre: "Carolina",
    apellido: "Ortega",
    curso: "Cuarto",
    edad: 17,
    correo: "carolina.ortega@email.com",
    sexo: "Femenino"
}])
db.Estudiantes.insertOne({nombre: "Pedro"})

<<<<<<< HEAD
ahora tenemos 12. 
=======
// ahora tenemos 12. 
>>>>>>> a8571cc (21-12-23 23:30pm)

/*ordenamientos, proyecciones, busquedas */
//PROYECCIONES
//me traera todos los estudiantes pero solo con la propiedad nombre
db.Estudiantes.find({},{nombre:1, edad:1})
//el sort segun 1 y -1 ordenara
db.Estudiantes.find({},{nombre:1, edad:1}).sort({nombre:-1})

//find busqueda avanzada
//primer argumento del find indica que documento qremos si buscamos uno en particular, si lo dejamos vacio trae todos, y el segundo argumetno en la proyeccion. aplica en los anteriores.
//En este caso trae a los documentos q sean curso cuarto, y de esos solo la propiedad nombre y edad. BUENISIMO.
db.Estudiantes.find({curso:{$eq: "Cuarto"}},{nombre:1, edad:1}).sort({nombre:-1})
db.Estudiantes.find({edad:{$lt: 17}},{nombre:1, edad:1}).sort({nombre:-1})





db.createCollection("clientes")
db.clientes.insertMany([{
    nombre: "Juan",
        apellido: "Pérez",
        curso: "Quinto",
        edad: 18,
        correo: "juan.perez@email.com",
        sexo: "Masculino"
    },
    {
        nombre: "María",
        apellido: "González",
        curso: "Tercero",
        edad: 16,
        correo: "maria.gonzalez@email.com",
        sexo: "Femenino"
    },
    {
        nombre: "Carlos",
        apellido: "Sánchez",
        curso: "Sexto",
        edad: 19,
        correo: "carlos.sanchez@email.com",
        sexo: "Masculino"
    },
    {
        nombre: "Laura",
        apellido: "Torres",
        curso: "Segundo",
        edad: 15,
        correo: "laura.torres@email.com",
        sexo: "Femenino"
    },
    {
        nombre: "Roberto",
        apellido: "Ramírez",
        curso: "Cuarto",
        edad: 17,
        correo: "roberto.ramirez@email.com",
        sexo: "Masculino"
    }])
//ordenado por edad desendenten (sort ordena)
db.clientes.find().sort({edad:-1})
//listar el cliente mas joven
db.clientes.find().sort({edad:1}).limit(1)
//el segundo mas joven
db.clientes.find().sort({edad:1}).limit(1).skip(1)
//listar cliente llamado juan
db.clientes.find({nombre: "Juan"})
//listar cliente llamado juan que tengan 18 años
db.clientes.find({nombre: "Juan"},{edad: 18})
//listar cliente llamado juan o lucia
db.clientes.find({nombre:{$in:["Juan","Ana"]}})
//clientes que tengan mas  25 años
db.clientes.find({edad:{$gt:25}})
//clientes que tengan menor igual 25 años
db.clientes.find({edad:{$lte:17}})
//los que esten en un rango
db.clientes.find({edad:{$gte:15,$lte:17}})
//los que no tengan la edad
db.clientes.find({edad:{$ne:17}})

<<<<<<< HEAD
update: 
=======
update
>>>>>>> a8571cc (21-12-23 23:30pm)
//actualizar la edad de Juan a 28 años:
//update viene en dos partes, primero filtro y dsp lo q vamos a actualizar
db.clientes.updateOne({nombre: "Juan"},{$set:{edad:28}})
db.clientes.find({nombre:"Juan"})
//todos los que tengan 17 los pasamos a 47
db.clientes.updateMany({edad:17},{$set:{edad:18}})
db.clientes.find({edad:18})
<<<<<<< HEAD
delete:
=======
delete
>>>>>>> a8571cc (21-12-23 23:30pm)
//borrar los que se llamen juan
db.clientes.deleteMany({nombre:"Juan"})

