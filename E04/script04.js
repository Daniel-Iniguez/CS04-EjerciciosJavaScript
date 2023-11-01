/*
------ EJERCICIO 4 --------
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; 
if there are any common courses print them out to the console.

*/
console.log('------------------------EJERCICIO 4:');
let student1Courses = ['Programming', 'English', 'Math'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

let resultados = document.getElementById("resultados");
let resultado1 = document.createElement("p");
//Forma 1
console.log('-Forma 1:');
for (let i = 0; i < student1Courses.length; i++) {
    for (let j = 0; j < student2Courses.length; j++) {
      if (student1Courses[i] == student2Courses[j]) {
        resultado1.textContent = 'Forma1 >> Se encontro una coincidencia en el elemento: '+student1Courses[i];
        console.log('Se encontro una coincidencia en el elemento: '+student1Courses[i])
      } 
    }
}

resultados.appendChild(resultado1);

let resultado2 = document.createElement("p");
resultado2.textContent = 'Usando filter() e includes() >> NO ENTENDI COMO HACERLO CON ESTOS METODOS';
resultados.appendChild(resultado2)
console.log('Usando filter() e includes(): NO ENTENDI COMO HACERLO CON ESTOS METODOS');






