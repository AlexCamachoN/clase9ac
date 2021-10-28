//CREO LAS CLASE DEL COLECCIONISTA
class Coleccionista {
    constructor(nombre, email, telefono, comentario) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.comentario = comentario;
    }
}

//DEfino todas las variables globales que necesito para trabajar con el DOM
let arrayColeccionistas =[];
let miFormulario = document.querySelector("#formulario");
let inputNombre = document.querySelector("#iNombre");

let nombreI = formulario.children[1].value;
let emailI = formulario.children[3].value;
let telefonoI = formulario.children[5].value;
let comentarioI = formulario.children[7].value;

let contenedor = document.querySelector("#coleccionistaIngresado");
let displayTodos = document.querySelector("#displayTodos");
let parrafos = displayTodos.getElementsByTagName("p");
let bandera = false;

//defino los eventos de ambos botones
miFormulario.addEventListener("submit", agregarColeccionistas);
btnMostrar.addEventListener("click", MostrarTodosColeccionistas);

//pongo en focus el primer input
inputNombre.focus();

//funciones 
//funciones para comprobar el ingreso de datos en inputs

function validarForm() {
    nombreI = formulario.children[1].value;
    emailI = formulario.children[3].value;
    telefonoI = formulario.children[5].value;
    comentarioI = formulario.children[7].value;
    console.log(nombreI);
    console.log(emailI);
    console.log(telefonoI);
    console.log(comentarioI);

    if(nombreI == '' || emailI == '' || telefonoI == '' || comentarioI == '') {
        alert('ERROR - Debe completar todos los campos para continuar');
        inputNombre.focus();
        bandera = false;
    }else{
        bandera = true;
    }
}

//funcion parra agregar Coleccionistas al arrays de Coleccionistas
function agregarColeccionistas(e) {
    e.preventDefault();
    validarForm();//valida que esten ok los datos del formulario
    if (bandera == true) {
        let opcion = confirm("Si los datos ingresados son correcto, Aceptar.");
        if (opcion == true) {
            let formulario = e.targert
            arrayColeccionistas.push(new Coleccionista(nombreI, emailI, telefonoI, comentarioI));
        }else {
            alert("No se agregara el usuario");
        }
        formulario.children[1].value = '';
        formulario.children[3].value = '';
        formulario.children[5].value = '';
        formulario.children[7].value = '';
        contenedor.innerHTML = '';
        agregarAlDom();
        inputNombre.focus();
    } else {
        inputNombre.focus();
    }
}

//funcion para mostrar en dom el ultimo Coleccionista ingresado
function agregarAlDom() {
    contenedor.innerHTML = `<h3>Listado de todos los materiales de arte:</h3>
    <p><strong> Nombre:</strong> ${nombreI}</p>
    <p><strong> email:</strong> ${emailI}</p>
    <p><strong> telefono:</strong> ${telefonoI}</p>
    <p><strong> comentario:</strong> ${comentarioI}</p>
    <hr>`;
}
//----------DESAFIO COMPLEMENTARIO----------------
//funcion para mostrar PROCEDURALMENTE todos los Coleccionistas en un div en DOM
function MostrarTodosColeccionistas(e) {
    e.preventDefault();
    let i = 0;
    displayTodos.innerHTML = `<h3>Listado de todos los materiales de arte:</h3>`;
    for (const coleccionista of arrayColeccionistas) {
        displayTodos.innerHTML += `<h3>Listado de todos los materiales de arte:</h3>
        <p><strong> Nombre:</strong> ${nombreI}</p>
        <p><strong> email:</strong> ${emailI}</p>
        <p><strong> telefono:</strong> ${telefonoI}</p>
        <p><strong> comentario:</strong> ${comentarioI}</p>
        <hr>`;
    }
}
