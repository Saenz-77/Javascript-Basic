//- factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while

let factorial = 0;
let actual = 10;
let siguiente = 9;
let contador = 1;

while (contador < 9){
    factorial = actual * siguiente;
    actual = factorial;
    siguiente--
    contador++
}

console.log(`El factorial de 10 utilizando un bucle While es: ${factorial}`);