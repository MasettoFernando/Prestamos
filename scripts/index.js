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

console.log("Prueba 1")



class Prestamo{

    constructor (nombre, apellido, dni, mail, fechaNacimiento, montoPrestamo, numeroDeCuotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.dni = dni;
        this.mail = mail;
        this.montoPrestamo = parseFloat(montoPrestamo);
        this.numeroDeCuotas = parseFloat(numeroDeCuotas);
        /* this.montoPorCuota = parseFloat(montoPorCuota); */
    
    }

    saludar (){
        /* alert("Bienvenido a nuestra pagina "+nombre+" "+apellido) */
        /* console.log("Bienvenido a nuestra pagina "+nombre+" "+apellido) */
    }

    otorgado(){
        this.otorgado = true
    }

    recargoCuota(porcentajeDeRecargo){
        this.recargo = (montoPrestamo / numeroDeCuotas) * porcentajeDeRecargo;
        this.montoPorCuota = (montoPrestamo / numeroDeCuotas) + this.recargo;
        console.log("Tienes que pagar "+numeroDeCuotas+" cuotas de: $"+parseFloat(this.montoPorCuota)+" por mes") 
    }
}


const probar = () => {
    console.log("Prueba probar()")
    let messi = "campeon" 
}

probar();

function validarFormulario(){
    

    console.log("prueba validarFormulario 1")
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const dni = document.getElementById("dni");
    const email = document.getElementById("email");
    const fechaNacimiento = document.getElementById("nacimiento");
    const montoPrestamo = document.querySelector(".ingresar__monto:checked");
    const numeroDeCuotas = document.querySelector(".ingresar__cuotas:checked");
    
    const nuevoPrestamo = new Prestamo (nombre, apellido, dni, email, fechaNacimiento, montoPrestamo, numeroDeCuotas);
    console.log(nuevoPrestamo);
    listaPrestamos.push(nuevoPrestamo);
    localStorage.setItem("prestamos" ,JSON.stringify(listaPrestamos));

    console.log("prueba validarFormulario 2")
}

validarFormulario();

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

const prestamo1 = new Prestamo ("Fernando", "Masetto", 38581294, "masettofernando", new Date, 30000, 12);
listaPrestamos.push(prestamo1);

const clicke = document.getElementById("enviar");
clicke.addEventListener("click", probar)

const formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", validarFormulario);
