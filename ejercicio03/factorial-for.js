//factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

var factorial;
var actual = 10;
var siguiente = 9;

for (let i= 1; i < 10; i++){
    factorial = actual * siguiente;
    actual = factorial;
    siguiente--
}
console.log(`el factorial de 10 es igual a: ${factorial}`);