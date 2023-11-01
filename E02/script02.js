/*
------ EJERCICIO 2 --------
Write a function that:
•	Takes in an array of numbers.
•	Doubles the value of each number in the array.
•	Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
*/
const numbers = [2,-4,5,-7]
const numbers2 = numbers.slice()
          
function numerosDuplicados(){
  console.log('------------------------EJERCICIO 2:');
  let resultados = document.getElementById("resultados")

  console.log("Array original: "+ numbers);
  
  for (let i = 0; i < numbers.length; i++) {
      numbers[i]*=2;
  }
  
  let resultado1 = document.createElement("p");

  resultado1.textContent ="Array duplicado (forma 1): " + numbers;
  resultados.appendChild(resultado1);
  console.log("Array duplicado (forma 1): " + numbers);


  //Usando metodo map()
  function duplicadoF(number){
      return number*2;
  }
  let duplicado = numbers2.map(duplicadoF);
  let resultado2 = document.createElement("p");

  resultado2.textContent ="Array duplicado (Usando map()): " +duplicado;
  resultados.appendChild(resultado2);
  console.log("Array duplicado (Usando map()): " +duplicado);
  
}

numerosDuplicados();