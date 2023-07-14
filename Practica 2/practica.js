// 1

// Solicita al usuario con el metodo prompt ingrese su edad
//Convertimos la entrada del dato a un int y luego comparamos si el valor int edad es mayor o igual que 18 entonces ya puede conducir
const edad = parseInt(prompt("Ingrese su edad:"));

if (edad >= 18) {
  console.log("Ya puedes conducir");
}



// 2

//se solicita al usuario ingrese su nota con prompt y se convierte a un float guardandolo en nota, se utilizan if y else para comprobar
// en que intervalo se ubica, a su vez si no se encuentra en ningun rango se da por nota invalida
const nota = parseFloat(prompt("Ingrese su nota:"));

if (nota >= 0 && nota < 3) {
  console.log("Muy deficiente");
} else if (nota >= 3 && nota < 5) {
  console.log("Insuficiente");
} else if (nota >= 5 && nota < 6) {
  console.log("Suficiente");
} else if (nota >= 6 && nota < 7) {
  console.log("Bien");
} else if (nota >= 7 && nota < 9) {
  console.log("Notable");
} else if (nota >= 9 && nota <= 10) {
  console.log("Sobresaliente");
} else {
  console.log("Nota inválida");
}

// 3

// se realiza una peticion al usuario de que ingrese un texto, y se realiza un bucle while que pide ingresa otro texto que 
//no finaliza hasta que se escriba cancelar
let cadenas = [];
let cadena = prompt("Ingrese un texto (o 'cancelar' para salir):");

while (cadena !== "cancelar") {
  cadenas.push(cadena);
  cadena = prompt("Ingrese otro texto (o 'cancelar' para salir):");
}

console.log(cadenas.join("-"));

// 4
// Se pide con prompt el DNI del usuario, y con un ciclo while se compara si se recibe un cancelar, si no se sigue repitiendo el cillo
// el ciclo comprueba que sea un numero valido y si no lo es muestra un mensaje de alerta
let dni = prompt("Ingrese el número de DNI:");

while (dni !== "cancelar") {
  if (!isNaN(dni) && dni >= 0 && dni <= 99999999) {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const resto = dni % 23;
    const letraDNI = letras.charAt(resto);
    console.log(`La letra del DNI ${dni} es ${letraDNI}`);
  } else {
    alert("El valor ingresado no es un número válido.");
  }

  dni = prompt("Ingrese otro número de DNI (o 'cancelar' para salir):");
}
