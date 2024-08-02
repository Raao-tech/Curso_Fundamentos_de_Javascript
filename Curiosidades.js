'use strict'; // Tal linea de codigo se usa para pdoer activar las nuevas caracteirsticas de ECMAscript
/*
    HEXADECIMAL
      Todo dato numerico que comience con  0x  será considerado hexadeciaml y se tratara como tal
*/
console.log(0x0043);// resultado será 67



//Para saber el valor de cada número hexadecimal, se debe de usar la siguietente formula

let digitos = [0,0,4,3]; //número presente en el codigo hexadecimal, en el caso de 0x0043, estamos trabajando con el primer 3
let posiciones = [3,2,1,0];// es el lugar que ocupa tal digito en el codigo hexadecimal, en el rpesente caso es la posicion 0,(se comienza a contar desde 0 no desde 1, asi que 3, ocupa la posicion 0, 4 ocupa la posicion 1, etc)

let valorDigitoHex = 0;
let indicador_posicion = 0;

digitos.forEach(digito => {


    // se agarra cada digito de la cifra hexadecimal, y se multiplica por la potencia de base 16(base del sistema), con la posicion que ocupa, como exponente
    valorDigitoHex += digito * (16**posiciones[indicador_posicion]);
   

    indicador_posicion ++; //se le suma una unoidad, al indicador de la posicion que ocupa cada digito de la cifra hexadecimal, que en este caso es 0x0043, sin embargo, solo son usados los digitos despues del indicador hexadecimal 0x

    return valorDigitoHex; //se retorna el valor del codigo hexadecimal en decimales
    
});

console.log(valorDigitoHex); //se imprime el valor hexadecimal, que con el ejemplo origianl deberia de ser 67, sin embargo se pueden jugar con los digitos para observar los cmabios








/*  
    LOS DATOS PRIMITIVOS SON INMUTABLES

      Dicha característia, se ve reflejada en su incapacidad de ser modificada mediante funciones o reestructuracion
*/

let numero = 0; // se declara una variable que contiene un dato primitvo de tipo numerico

suma(numero);//la variable ha sido otorgada como parametro, por lo que el valor primitivo que contiene (en esete caso 0), es copiado y archivado en otro espacio en memoria conocido como num, según el nombramiento de dicho parametro en la definicion de la función
console.log("Valor de la variable "+ numero +" afuera de la funcion")


function suma(num) {

    num += 1; //se le suma una unidad al espacio en mememoria llamado num, más no a la variable que se otorgue como parámetro

    console.log("Valor de la variable "+ num +" adentro de la funcion");

    return num;
}


/* 
    ARRAYS DESIGUALES
      Resulta que los arrays vaciosno son iguales, pero aquellos que son negados con el operador not no lo son 
*/

    const array_1 = {};
    
console.log( array_1 == array_1 , array_1 == !array_1, array_1 === array_1, array_1 === !array_1);

