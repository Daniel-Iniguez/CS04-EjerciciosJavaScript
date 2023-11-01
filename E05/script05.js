/*
------ EJERCICIO 5 --------
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
1.	Write a command that prints out all of the people in the list.
2.	Write the command to remove "Dani" from the array.
3.	Write the command to remove "Juan" from the array.
4.	Write the command to move "Luis" to the front of the array.
5.	Write the command to add your name to the end of the array.
6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
7.	Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.

*/
console.log("------------------------EJERCICIO 5:");
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
let resultados = document.getElementById("resultados");
let res2 = document.createElement("p");
let res3 = document.createElement("p");
let res4 = document.createElement("p");
let res5 = document.createElement("p");
let res7 = document.createElement("p");

//1.Write a command that prints out all of the people in the list.
function arrayList(element) {
  let res1 = document.createElement("p");
  res1.textContent = "01. " + element;
  resultados.appendChild(res1);
  console.log(element);
}
people.forEach(arrayList);


console.log("1. " + people);

//2.Write the command to remove "Dani" from the array.
res2.textContent =
  "02. Persona eiminada: " +
  people.splice(1, 1) +
  " -----> Lista actual: " +
  people;
resultados.appendChild(res2);
//console.log("2. Persona eiminada: " + people.splice(1, 1));
console.log(people);

//3.Write the command to remove "Juan" from the array.
res3.textContent =
  "03. Persona eiminada: " +
  people.splice(2, 1) +
  " -----> Lista actual: " +
  people;
resultados.appendChild(res3);
//console.log("3. Persona eiminada: " + people.splice(2, 1));
console.log(people);

//4.Write the command to move "Luis" to the front of the array.
people.splice(1, 1); //Elimino Luis del array
people.splice(0, 0, "Luis");
res4.textContent = "04. " + people;
resultados.appendChild(res4);
console.log("4. " + people);

//5.Write the command to add your name to the end of the array.
people.splice(3, 0, "Daniel");
res5.textContent = "05. " + people;
resultados.appendChild(res5);
console.log("5. " + people);

//6.Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)

console.log("6. ");
for (let i = 0; i < people.length; i++) {
  let res6 = document.createElement("p");
  res6.textContent = `06. ${people[i]}`; 
  resultados.appendChild(res6);
  console.log(people[i]);
  if (people[i] === "Maria") {
    break;
  }
}

//7.Write the command that gives the indexOf where "Maria" is located.
res7.textContent = "07. Maria esta en la posición: " + people.indexOf("Maria")
resultados.appendChild(res7);
console.log("7. Maria esta en la posición: " + people.indexOf("Maria"));

//Resultados:
