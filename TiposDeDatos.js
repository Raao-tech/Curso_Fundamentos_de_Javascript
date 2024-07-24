/*
    Datos Primitivos

    Son todos aquellos datos de javascript, que no son objetos, ni poseen métodos

    Strings: Son cadenas de caracteres
*/
    let name = "Alexander";
/*
   Number: Es un dato numerico que posee como limites -9007199254740991 (-253-1) a 9007199254740991 (253-1). 
   Números superiores pueden llegar a ser imprecisos.
*/
    let age = 16;
/* 
   Boolean: Son valores de verdadero o falso, 1 o 0, paso de energía o no,
   true o false.
*/
   let esMayorDeEdad = age > 18; //False
/*
    Null: es un tipo de dato especial, pues a pesar de no ser un objeto, y como tal no poseer metodos ni atributos,
    si suele ser el resultado de los objetos, además de eso, el valor de null, es vacío, cosa que se diferencia de 
    undefine, porque  este ultimo repsenta, la NO definición, ergo, existencia en el archivo,
    mientras que Null expres, vacío de algo que existe, o en otras palabras, inexistencia de valor, más no de
    definición.
*/
    let Pareja = null;
/*
    Undefine: Es un tipo de dato especial, con alcance global, su valor es directamente resultadante
    de la No definición de una variable en el código
*/
    let orientacion = undefined; 
/*
    Symbol: Symbol es un objeto incorporado cuyo constructor devuelve un symbol primitivo — también llamado Symbol value 
    o simplemente Symbol — que está garantizado que sea único. Los Symbols se utilizan a menudo para añadir claves de 
    propiedades únicas a un objeto que no sean iguales a las claves que cualquier otro código pueda añadir al objeto, 
    y que están ocultas de cualquier mecanismo que otro código utilice normalmente para acceder al objeto. Esto permite 
    una forma de encapsulation débil, o una forma débil de ocultación de información.
*/
    let symb = Symbol("Simbolo");
    let symb2 = Symbol("Simbolo");

    console.log(symb === symb2); //false, debido a que no son iguales apesar de que sus cadenas de textosson la mismas, pero Symbollas trata como etiquetas o claves distintas

/*
    Datos Complejos (Objetos)

    Los datos complejos, son escnecia,objetos, unos mas simples, como un array ,que solo enlista valores sin darlesrelaciones,
    y otros mas completos, como un objeto, el cual le da relacion o llaves a sus valores,pero que a su vez pueden almacenar fragmentos de codigo como lo son funciones


    Arrays: Son un tipo de dato complejo,perosin embargo es un objeto simple, el cual solo enlista valores como lo haría una matriz
*/
    let friends = ["Daniela","Angela","Fiorella","Rafael"];
/*
    Funciones: Son fragmentos de codigo reutilizable que recibe parametros para relaizar opraciones con estos datos y retornar un resultado
*/
    function Saludar(nombre) {

        console.log ("Hola, soy "+ nombre + ", ¿Cómo te llamas? ");
        
    }
    Saludar(name);
/*
    Object: Son el conjunto de datos primitvos , arrays, y funciones, que crean relacion entre tales datos,  poseyendo atributos y metodos
*/
    let person = {
        nombre: name,
        edad: age,
        amigos: friends,
        pareja: Pareja,
        orientacionSex: orientacion,
        
      



    }

    console.log(person);