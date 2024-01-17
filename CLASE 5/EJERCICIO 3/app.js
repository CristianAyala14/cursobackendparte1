import moment from "moment";
const hoy  = moment();
const fechaNacimiento = moment("1997-05-14", "YYYY-MM-DD")
if(fechaNacimiento.isValid()){
    console.log(`Desde mi nacimiento han pasado ${hoy.diff(fechaNacimiento, "days")} dias`)
}else{
    console.log("La fecha es invalida")
}
