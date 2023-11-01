/*
------ EJERCICIO 1 --------
Copy the code below into your workspace:
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  // your code here
}

printOutString();
Complete the function to print out the string: This is a sentence.

*/
let arr = ["This", "is", "a", "sentence."];

function printOutString() {
  console.log("------------------------EJERCICIO 1: ");
  // Selecciona el elemento div por su id
  let resultadosDiv = document.getElementById("resultados");

  let string = arr[0] + " " + arr[1] + " " + arr[2] + " " + arr[3];
  // Crea elementos de párrafo para mostrar los resultados
  let resultado1 = document.createElement("p");
  resultado1.textContent = "Array unido (forma 1): " + string;
  console.log("Array unido (forma 1): " + string)

  //Usando metodo join()
  let cadenaJoin = arr.join(" ");
  let resultado2 = document.createElement("p");
  resultado2.textContent = "Array unido (Usando join()): " + cadenaJoin;
  console.log("Array unido (Usando join()): " + cadenaJoin);

  // Agrega los elementos de párrafo al div
  resultadosDiv.appendChild(resultado1);
  resultadosDiv.appendChild(resultado2);
}

printOutString();
