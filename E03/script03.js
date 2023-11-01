/*
------ EJERCICIO 3 --------
Write a program to compute the sum and product (multiplication) of an array of numbers.
Print out the sum and the product.
*/
console.log('------------------------EJERCICIO 3:');
const numeros = [1,-2,-3,-4];
let s1 = numeros[0] + numeros[1];
let s2 = s1 + numeros[2];
let s3 = s2 + numeros[3];

let m1 = numeros[0] * numeros[1];
let m2 = m1 * numeros[2];
let m3 = m2 * numeros[3];

console.log('-Forma 1:');
console.log('La suma es: '+s3);
console.log('El producto es: '+m3);





//Usando metodo reduce()
console.log('-Usando reduce():');

function sumaF(acomulador,numero){
  return acomulador+numero;
}

function productoF (acomulador,numero){
  return acomulador*numero;
}

let suma = numeros.reduce(sumaF,0)
let producto = numeros.reduce(productoF,1)
console.log('La suma es: '+suma);
console.log('El producto es: '+producto);

//Para HTML
let resultados = document.getElementById('resultados');

let resultado1 = document.createElement("p");
resultado1.textContent = 'De la forma 1; la suma es: '+s3+', y el producto es: '+m3;
resultados.appendChild(resultado1);

let resultado2 = document.createElement("p");
resultado2.textContent = 'Usando el metodo reduce(); la suma es: '+suma+', y el producto es: '+producto;
resultados.appendChild(resultado2);