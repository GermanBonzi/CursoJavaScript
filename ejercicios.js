
//let b =cadena.replace('M','F');



//ejercicio1
/*
let nombre = prompt('ingrese el nombre');
let edad = prompt('ingrese la edad');

console.log('hola  '+nombre+'  tienes  '+edad+'  años y el año que viene cumpliras'+edad);*/

//ejercicio 2
/*
let resultado;
let palabra=prompt('ingrese opcion 1, 2 o 3');

if (palabra==1){
    let b = prompt('ingrese base para el rectangulo');
    let h = prompt('ingrese altura para el rectangulo');
    resultado=b*h;
    console.log(resultado);
}
else if (palabra ==2){
    b=prompt('ingrese radio del circulo');
    resultado=Math.PI*Math.pow(b,2);
    console.log(resultado);
}

else {
    b=prompt('ingrese la base para el triangulo');
    h=prompt('ingrese la altura para el triangulo');
    resultado=(b*h)/2;
    console.log(resultado);
}
*/


let n=prompt('ingrese un numero');
for (let i=1; i<n ;i++){
    if (i % 2 == 0){
        console.log(i+ 'es par');
    }
    else {
        console.log(i+ ' no es par');
    }
}


