
    //STRINGS: Cadenas de caracteres

    const string1 = "Comillas Dobles";
    const string2 =  "Comillas Simples";
    const string3 = "Manzana, Pera, Durazno, Cebolla, Platano, Carne de Res, Cochino, Perejil, Pescado, Huevo, Pollo, Calamares, Tomate";
    /*
        NOTA:
        El uso de cualquiera de las anteriores comillas, será irrelevante para el funcionamiento del código,
        pero se recomienda  escoger el uso exclusivo de una de las dos, para fomentar pulcritud en el proceso de programación

    */

    //CONCATENACIÓN DE STRINGS:
        console.log("CONCATENACIÓN DE STRINGS: ");


        const concatenacion1 = `${string1} es casi siempre la más usada al programar`; //Para concatenar variables adentro de strings, se requiere el uso de comillas invertidas
        const concatenacion2 = string1 +" ó " + string2 + " cualquiera es buena elección, pero, recuerda, debes escoger solo UNA "; 
        
        console.log(concatenacion1);
        console.log(concatenacion2);

    //FUNCIONES DE UTILIDAD:
        console.log("FUNCIONES DE UTILIDAD: ");
    
        const funcion1 = string1.toLowerCase(); // Transforma todos los caracteres a minusculas
        const funcion2 = string1.toUpperCase(); // Transforma  todos los caracteres a mayúsculas
        const funcion3 = string1.substring(0,8); //Otorga los carácteres indicados en los parametros, en este caso desde el caracter 0 al caracter 8
        const funcion4 = string1.length; //Otorga la cantidad de caracteres del string
        const funcion5 = string3.split(","); //Retorna un Array (dato complejo, perteneciente a los objetos) hecho con piezas de caracteres, separadas por algún elemento indicado en los parametros presente en la cadena de texto, en este caso es la coma 

        console.log(funcion1);
        console.log(funcion2);
        console.log(funcion3);
        console.log(funcion4);
        console.log(funcion5, typeof funcion5);