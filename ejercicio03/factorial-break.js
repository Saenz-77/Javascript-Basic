//-factorial-break.js -> Este archivo debe calcular el factorial de 10 usando un while, bifurcacion if y un break

let factorial = 0;
let actual = 10;
let siguiente = 9;
let contador = 0;

while (contador < 9){
    factorial = actual * siguiente;
    actual = factorial;
    siguiente--
    if(siguiente == 1){
        break;
    }
    contador++
}