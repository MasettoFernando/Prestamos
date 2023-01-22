var doc = require('arg.js').document;


let mayor 
let montoPrestamo = 0
let numeroDeCuotas = 0
let montoPorCuota = 0
let recargoPorCuota = 0
let sueldoApto = 0
let aprodabo = false
let porcentajeDeRecargo
let recargo
let nombre
let apellido
let mail
let dni
let recargoPorMora = 0
let pagarCuota 
let cuantosAños 
let listaPrestamos =  []







class Prestamo{

    constructor (nombre, apellido, dni, mail, fechaNacimiento, provincia, montoPrestamo, numeroDeCuotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        if(doc.isValidDni(dni)){
            console.log('es valido')
            this.dni = dni
        }
        this.mail = mail;
        this.provincia = provincia;
        this.montoPrestamo = parseFloat(montoPrestamo);
        this.numeroDeCuotas = parseFloat(numeroDeCuotas);
        if (numeroDeCuotas == 12){
            this.porcentajeDeRecargo = 0.20
        }if(numeroDeCuotas == 24){
            this.porcentajeDeRecargo = 0.30
        }if(numeroDeCuotas == 36){
            this.porcentajeDeRecargo = 0.40
        }
        
        this.montoPorCuota=  (this.montoPrestamo / this.numeroDeCuotas) +(this.montoPrestamo / this.numeroDeCuotas) * this.porcentajeDeRecargo

    }

    

    saludar (){
        
    }

    otorgado(){
        this.otorgado = true
    }

    
    recargoCuota(){
        
    }
}

console.log('prueba validador dni fernandito', doc.isValidDni('123123'))



function validarFormulario(){ 
    

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const dni = document.getElementById("dni").value;
    const email = document.getElementById("email").value;
    const fechaNacimiento = document.getElementById("nacimiento").value;
    const provincia = document.getElementById("provincia").value;
    const montoPrestamo = document.querySelector("input[name=amount]:checked").value;
    const numeroDeCuotas = document.querySelector("input[name=fees]:checked").value;
    
    const nuevoPrestamo = new Prestamo (nombre, apellido, dni, email, fechaNacimiento, provincia, montoPrestamo, numeroDeCuotas);
    console.log(nuevoPrestamo);
    listaPrestamos.push(nuevoPrestamo);
    localStorage.setItem("prestamos" ,JSON.stringify(listaPrestamos));

    

    let ventana = document.getElementById("ventana__informacion") 
    ventana.innerHTML = `Bienvenido ${nuevoPrestamo.nombre} ${nuevoPrestamo.apellido} con DNI: ${nuevoPrestamo.dni} a nuestra Empresa. A requerido el monto de $ ${nuevoPrestamo.montoPrestamo} a pagar en ${nuevoPrestamo.numeroDeCuotas} cuotas, El valor por cuota le quedaria en $ ${Math.round(nuevoPrestamo.montoPorCuota)}, Si la informacion corresponde con lo solicitado le enviaremos un mail a ${nuevoPrestamo.mail} para coordinar los ultimos detalles. ${nuevoPrestamo.provincia} e indicarle a que sucursal de ${nuevoPrestamo.provincia} " le correspondería."`  

    

    renderPedidoRealizado()
}

function renderPedidoRealizado(){
    let modal = document.getElementById("modal")
    modal.style.visibility = "visible"
    modal.style.margin = "2rem"
    modal.style.padding = "2rem"
    modal.style.transitionDuration = "1s"
}


function eliminarRenderPedido() {
    let modal = document.getElementById("modal")
    console.log("eliminar onclick console log")
    modal.style.visibility = "hidden"
    modal.style.margin = "0rem"
    modal.style.padding = "0rem"
    modal.style.transitionDuration = "1s"
}

const eliminar = document.getElementById('boton_informacion_eliminar')
eliminar.addEventListener("click", eliminarRenderPedido)   

const formulario = document.getElementById("enviar");
formulario.addEventListener("click", validarFormulario);

const prestamo1 = new Prestamo ("Fernando", "Masetto", 38581294, "masettofernando", new Date, 30000, 12);
listaPrestamos.push(prestamo1);


function getEdad(dateString) {
    let hoy = new Date()
    let fechaNacimiento = new Date(dateString)
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
    if (
      diferenciaMeses < 0 ||
      (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
      edad--
    }
    return edad
}

