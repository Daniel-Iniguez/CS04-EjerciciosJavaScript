/*
------ EJERCICIO 6 --------
Realizar una función que realice el algoritmo de burbuja.
Entrada [3, 6, 12, 5, 100, 1 ]
Salida [1, 3, 5, 6, 12, 100]
*/
console.log('------------------------EJERCICIO 6:');
const array = [3, 6, 12, 5, 100, 1 ];
let resultados = document.getElementById("resultados");
let arrayInicial = document.createElement("p");
arrayInicial.textContent = "El arreglo original es: " + array;
resultados.appendChild(arrayInicial);
console.log(array);

//Algoritmo burbuja
for (let j = 0; j < array.length; j++) {
  for (let i = 0; i < array.length; i++) {
  let numActual;
  if (array[i] > array[i+1]) {
    numActual = array[i];
    array[i] = array[i+1];
    array[i+1] = numActual;
    
    }
  }
}

let arrayFinal = document.createElement("p");
arrayFinal.textContent = "El arreglo ordenado con el algoritmo burbuja es: " + array;
resultados.appendChild(arrayFinal);
console.log(array);