let variableQueCambia = "Cualquier valor";

const variablesQueNoCambian = "Variable que no cambian";

//datos primitivos
let nombre = "Laura";
let numeros = 20;
let booleanos = true;
let noHayValor = null;
let noDefinidos = undefined;

//Simbolos
let simbolo = Symbol("unico");

//Objetos
let moto = {
  marca: "Kawasaki",
  modelo: 1991,
  valor: 12000000,
};

//Arreglos
let frutas = ["mango", "cereza", "manzana"];

//Funciones
function nameFunction() {}

/*Strings */
//Concatenar
let string1 = "Hola, ¿Cómo estás?";
let string2 = "espero no del todo mal";
let string3 = `${string1}, ${string2}, yo estoy genial`;

console.log(string3);

console.log(string3.length);
console.log(string3.toLocaleUpperCase);
console.log(string3.toLocaleLowerCase);

let frase = "javascript es genial!";
console.log(frase.substring(0, 10));
