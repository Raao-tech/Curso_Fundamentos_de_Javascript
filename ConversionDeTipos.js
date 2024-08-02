"use strict";
// CONVERSIÓN DE TIPOS

/*      
        CONVERSIÓN EXPLICITA 
            La conversión explicita en JavaScript es cuando intencionalmente se modigfica el tipo de dato
            de una variable.  El uso de tal práctica, es recomendado para evitar errores producto de la 
            conversión implicita.  Para llevarlos a cabo se manejan funciones o constructores como los 
            siguientes 
*/

/*
                ParseInt(string, radix): Es una función que convierte un valor de tipo cadena de texto 

*/
 
            const string_1 = "123"; //Tipo String con un contenido matematico "123" 
            const string_2 = 123; //Tipo Number o INT
            const string_3 = "5671Raao"; //Tipo  
            
            
            
            console.log(string_1, "La anterior expreción es de tipo STRING");
            
            console.log( parseInt(string_1,10) , parseInt(string_2), "Las anteriores expreciones son de tipo INT");