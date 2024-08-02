// tipos de datos los decimales y enteros
    const entero = 5;
    const decimales = 5.5;


    console.log(typeof entero , typeof decimales);

//Notación Científica
    const notacionCientifica = 999e9;

    console.log(notacionCientifica, typeof notacionCientifica); 

//Operaciones Aritmeticas Básicas

    const suma = 55 + 55;
    const resta = 100 - 5;
    const multiplicacion = 25 *5;
    const division = 100 / 5;
    const modulo = 100 % 5; //otorga el resto de una division, en el presente caso, al ser exacta, el resutlado es 0
    const exponenciacion = 5 ** 2 ; //otorgará 25, porque es 5 elevado a la 2

    console.log("suma " + suma,"resta " + resta ,"multiplicacion " + multiplicacion,"division "+ division, "modulo " + modulo, "exponencianción " + exponenciacion );

//infinity, NaN, Max y Min value.

    /*
        INFINITY  
           Es el valor usado por javascript cuando se realizan operaciones que exceden los
          valores numericos a los cuales esta configuarado
    */

        const infinito = Infinity;

        //Especificación del signo del infinito
        const infinitoNegativo =  Number.NEGATIVE_INFINITY;
        const infinitoPositivo = Number.POSITIVE_INFINITY;

        //Ciertos casos de uso
        const casoA1 = 100 / 0; // otorgará infinity positivo
        const casoA2 = -100 / 0; //otorgará infinity negativo
        const casoA3 = 100 / -0; //otorgará infinity negativo
        const casoA4 = 25 / null;//otorgará infinity positivo
        const casoA5 = Infinity / null ; //otorgará infinity positivo
        const casoA6 = 25 ** 5 ** 5;
        const casoA7 = 999e999; //Número exageradamente grandes, daran infinity ya sean negativos o positivos

        //funciones 
        const funcionA1 = isFinite(casoA1);// Será false, si la variable otorgada es infinita

/*
    NaN NOT A NUMBER
        Es un tipo de dato primitvo, el cual se encuentra en la funcion Number entre los recursos de javascript, y es considerado un tipo de dato especial
*/

        const noEsUnNumero = NaN; //primera forma de ser declarado
        const noEsUnNumero2 = Number.NaN; //segunda forma de ser declarado



        //casos de uso
            const casoB1 = 0 / 0;
            const casoB2 = 6 + undefined;
            const casoB3 = null / null;
            const casoB4 = 25 * undefined;
            const casoB5 = 25 + NaN; 
            const casoB6 = Infinity / Infinity;
            const casoB7 =  NaN + NaN;
            const casoB8 = parseInt("hola"); //Se le esta otrogando la funcion parseint, (encargada de traspasar STRINGS a INT ), un parametro donde no hay valores matemtaios en el texto, sino simplente texto.

            


        //funciones
            const funcionB1 = isNaN(casoB1);//otorgara true si la variable otorgada es NaN
            const funcionB2 = NaN === NaN; //false porque NaN no es igual a nigún valor incluyendose así mismo
            const funcionB3 = NaN == NaN;//false porque NaN no es igual a nigún valor incluyendose así mismo
            const funcionB4 = NaN == Number.NaN; //false porque NaN no es igual a nigún valor incluyendose así mismo
            const funcionB5 = NaN === Number.NaN; //false porque NaN no es igual a nigún valor incluyendose así mismo
      

/*
        Max y Min Value
            son los Maximos y Minimos valores que javascript puede soportar
*/
            const max = Number.MAX_VALUE;
            const min = Number.MIN_VALUE;

            const excediendoLimites = max * 0.00000000000000005551 + max;
            
/*
 Console.log 
    infinity 
*/
        console.log(infinito, infinitoNegativo, infinitoPositivo);
        console.log(casoA1, casoA2, casoA3, casoA4,casoA5, casoA6, casoA7);
        console.log(funcionA1);

//  NaN
        console.log(noEsUnNumero,noEsUnNumero2); 
        console.log( casoB1, casoB2, casoB3, casoB4, casoB5, casoB6, casoB7,casoB8);
        console.log(funcionB1, funcionB2, funcionB3, funcionB4, funcionB5);

//Max y Min Value
        console.log(max, " " + min);
        console.log("limite " + excediendoLimites);
//impresición de javascript con los decimales
const resultado = 0.1 + 0.2;

console.log(resultado);
console.log(resultado.toFixed(1));
console.log(resultado.toFixed(1) == 0.3); // Se compara el valor y no el tipo de variable, da true, al ser el mismo valor
console.log(resultado.toFixed(1) === 0.3);// Se compara el valor y el tipo de variable, sa false, a pesar de tener el mismo valor, pero distinto tipo de variable
console.log( "Tipos de Variables " + typeof resultado.toFixed(1),  typeof 0.3, typeof resultado);


//Operaciones Avanzadas

const raizCuadrada = Math.sqrt(10000);
const valorAbsoluto = Math.abs(-25);
const aleatorio = Math.random(); 

console.log(raizCuadrada); // La Raiz Cuadrada de 10000 que es 100
console.log(valorAbsoluto); // valor absoluto del valor otorgado, en este caso -25
console.log(aleatorio);//Un número aleatorio mayor o igual a 0 pero menor a 1
console.log(Number.EPSILON); // la constante de Epsilon