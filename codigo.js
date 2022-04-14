//Arrays: conjunto de datos donde se ponen todos los objetos que querramos y se usa con []
                                                                     /*
let frutas = ["banana","manzana","pera"];

document.write(frutas[1]);

//Arrays asociativos: igual que los arrays pero se asocia cada objeto a un nombre y se usa {} y se separan con , al final

let pc = {
    nombre: "Leggi-PC",
    procesador: "Intel Core I7",
    ram: "16GB",
    espacio: "1TB",
};

let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc["ram"];
let espacio = pc["espacio"];

frase = `el nombre de mi pc es: <b>${nombre}</b> <br>
         el procesador es: <b>${procesador}</b> <br>
         la memoria ram es: <b>${ram}</b> <br>
         el espacio en disco es de: <b>${espacio}</b>`;

document.write(frase);
                                                                    
//Bucles e Iteracion: 
//while es como un IF pero se ejecuta una y otra vez mientras sea verdadero

let numero = 0;

while (numero < 3) {
    numero++;
    document.write(numero + "<br>");
}

// do while, es igual pero primero ejecuta el do y despues pregunta el while

let numero2 = 1;

do {
    numero2++
    document.write(numero2);
}

while (numero2 < 3);
                                                                           
//break: hace que el bucle termine

let numero = 0;

while (numero < 1000){
    numero++;
    document.write(numero);
    if (numero == 10){
        break;
    }
}
                                                                       

//for:bucle determinado (mas criollo en el cuaderno)
//dentro de los () 1ro declaramos la var, 2do se ejecuta mientras que, 3ro al final de cada vuelta pasa esto

for (let i = 6; i >= 0; i--) {
    document.write(i + "<br>");
}

//continue: es como break pero no termina el bucle, sino que saltea

// if(i == 4) {
//    continue;
//}

                                                                               

//For in y For on: in reccore la posicion del string y on recorre el valor del string

let animales = ["gato", "perro" ,"pez"]

for (animal in animales){
    document.write(animal + "<br>");
}

for (animal of animales){
    document.write(animal + "<br>");
}
                                                                              

//Label: especificar buclesy poder terminarlos o continuarlos cuando especifiquemos (Si lees el codigo se entiende)

array1 = ["maria,", "josefa", "roberta"];
array2 = ["pedro", "marcelo", array1, "josefina"];

forRancio:
for (let array in array2){
    if (array == 2){
        for (let array of array1) {
            continue forRancio
            document.write(array + "<br>");
        }
    } else {
        document.write(array2[array] + "<br>");
    }
}

                                                                                                                                                                      

//Funciones: determinamos un bloque de codigo y le damos nombre para poder reutilizarlo, cuando lo declaramos, no se esta ejecutando, solo declarando

function saludar() {

    respuesta = prompt("Hola Leyi, como estas?");
    if (respuesta == "bien") {
        alert("Me alegro");
    } else {
        alert("Una pena");
    }
}

saludar();
                                                                      
//return: lo que nos devuelve la funcion despues de ejecutarse. Termina la funcion.

function saludar() {
    alert("Hola");
    return 7;
}

let saludo = saludar()

document.write(saludo);
                                                                           
//Parametros: definimos las variables en los () cuando llamamos a la funcion. Fuera de la funcion no existen esas varibles

function suma(numero1, numero2) {

    document.write(numero1 + numero2);
    document.write("<br>");

}

suma(5, 15);

suma(23, 8);

suma(12, 12);
                                                                
// Ejemplo:

function saludar(nombre) {
    let frase = `Hola ${nombre} , como estas?`;
    document.write(frase);
}

saludar("pedro");
                                                                     
//Funciones flecha: (se ven mejor mas adelante)

const saludar = (nombre)=>{
    document.write("hola como estas?" + nombre)
}

saludar(" Leyi")
                                                                

//Problema 1:

let free = false;

const validarCliente = (time)=> {
    let edad = prompt("Cual es tu edad?");
    if (edad > 18) {
        if (time >= 2 && time < 7 && free == false){
            alert("Podes pasar gratis porque sos la primer persona despues de las 2AM");
            free = true;
        } else {
            alert(`son las ${time}:00Hs y podes pasar pero tenes que pagar la entrada`);
        }
    } else {
        alert("No podes pasar sos menor de edad");
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);
                                                                           

//Problema 2:

let cantidad = prompt("Cuantos alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i ++) {
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)),0];
}

const tomarAsistencia = (nombre,p)=> {
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}

for (i=0; i < 30; i++) {
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    ________Presentes: ${alumnosTotales[alumno][1]} <br>
    ________Ausencias: ${30 - alumnosTotales[alumno][1]}
    `;
    if (30 - alumnosTotales[alumno[1]] > 18) {
    resultado+= "Reprobado por inasistencias <br><br>";
    } else {
        resultado+= "<br><br>";
    }
    document.write(resultado);
}
                                                                        */

//Problema 3:

const sumar = (num1,num2)=> {
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1,num2)=> {
    return parseInt(num1) - parseInt(num2);
}
const dividir = (num1,num2)=> {
    return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1,num2)=> {
    return parseInt(num1) * parseInt(num2);
}

alert("Que operacion deseas realizar?");
let operacion = prompt("1: sumar, 2:restar, 3:dividir, 4:multiplicar");

if (operacion == 1) {
    let numero1 = prompt("Primer numero para sumar");
    let numero2 = prompt("Segundo numero para sumar");
    resultado = sumar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}

else if (operacion == 2) {
    let numero1 = prompt("Primer numero para restar");
    let numero2 = prompt("Segundo numero para restar");
    resultado = restar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}

else if (operacion == 3) {
    let numero1 = prompt("Primer numero para dividir");
    let numero2 = prompt("Segundo numero para dividir");
    resultado = dividir(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}

else if (operacion == 4) {
    let numero1 = prompt("Primer numero para multiplicar");
    let numero2 = prompt("Segundo numero para multiplicar");
    resultado = multiplicar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}

else {
    alert("No se ha encontrado la operacion");
}


















