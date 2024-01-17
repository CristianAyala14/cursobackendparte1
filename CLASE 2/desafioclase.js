//EJEMPLO PARA PRIMER DESAFIO
class TicketManager {
    //variable privada
    #precioBaseDeGanancia= 1.15;
    //se inicia la clase
    constructor(){
        this.eventos =[]
    }

    getEventos(){
        return this.eventos
    }

    agregarEvento(nombre, lugar,precio){
        let id_evento = (this.getEventos()).length; 
        let evento = {
            nombre: nombre,
            lugar: lugar,
            precio: precio * this.#precioBaseDeGanancia,
            capacidad: 50, //por defecto
            fecha: Date(),
            participantes:[], //array vacio para participantes 
            id: ++id_evento,
        }
        this.eventos.push(evento)
        return this.eventos;
    }

    traerEvento(idEvento){
        let evento= this.eventos.find((el)=> el.id == idEvento)
        if(evento){
            return evento;
        }else{
            return null; //si devuelvo objeto puedo poner null.
        }
    }
    //verificar si la persona esta registrada en el evento
    estaRegistrado(idEvento, idPersona){
        const evento=this.traerEvento(idEvento)
        if(evento== null){
            return ["El evento no existe"]
        }
        //ya encontramos el evento. Y ahora verificamos el registro.
        let registro = evento.participantes.find((el) => el == idPersona)
        if(registro===undefined){
            return true
        }else{
            return false
        }
    }

    agregarParticipante(idEvento, idParticipante){
        const evento=this.traerEvento(idEvento)
        if(evento== null){
            return ["El evento no existe"]
        }
        if(this.estaRegistrado(idEvento, idParticipante)){ //aca el metodo estaregistrado tirara false si no estaba registrado y lo agrega a la lista.
            evento.participantes.push(idParticipante)
            return evento
        }else{
            return ["La persona ya esta registrada"]
        }
    }

    //para reprogramar el evento??
    ponerEventoEnGira(idEvento, nLocalidad, nFecha){
        const evento = this.traerEvento(idEvento)
        let id_UltimoEvento = (this.getEventos()).length; 

        if (!evento){
            return "El evento no existe"
        }
        let nuevoEvento ={...evento};
        nuevoEvento.lugar= nLocalidad;
        nuevoEvento.fecha= nFecha;
        nuevoEvento.id= ++id_UltimoEvento;
        this.eventos.push(nuevoEvento)
        return this.eventos;
    }
}

const ticketManager = new TicketManager();
let eventos = ticketManager.agregarEvento("Baradero Rock", "Baradero", 1000)
eventos = ticketManager.ponerEventoEnGira(1,"Baradero", "12/12/2023") //pongo en gira el evento que cree arriba.
console.log(eventos);

//desafio entregado



