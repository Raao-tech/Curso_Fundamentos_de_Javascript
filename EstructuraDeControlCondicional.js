/*
        oPERADORES DE COMPARACIÓN
            Los operadores de comparación, son estructuras lógicas que permiten crear realciones entre vlaores, como lo podrían ser comparaciones o negaciones
|          otorgan datos booleanos, donde la respuesta es casi siempre true o false, 1 o 0, paso o no paso de energía
*/
const value_1 = "123";              //string;
const value_2 = 123;                //number(INT);
const value_3 = 1.23;               //number(FLOAT);
const value_4 = 234;                //number(INT);
const value_5 = "Valor";  //string;


//  1)IGUALDAD ( A == B ) : Es un operador de comparación que  hace la igualdad entre los VALORES de dos datos, obviando sus TIPOS.
    
    let casoA1 = value_1 == value_2;  //true (distinto tipo, pero igual valor)
    let casoA2 = {} == {}; //false, (javascript compara la ubicacón en memoria de cada obejto array, más no su valor, al ser distintos objetos, con distinta ubicación, otorga false)
    let casoA3 = value_2 == value_2; //true son el mismo objeto
 
    console.log(casoA1,casoA2, casoA3, "IGUALDAD SIMPLE");

// IGUALDAD ESTRICTA ( A === B ): Es un oprador que comprara tanto los VALORES como los TIPOS de dos datos, buscando igualdad entre esots dos puntos
    let casoB1 = value_1 === value_2; //FALSE A diferencia de la igualdad simple, este no solo compara los valores sino que también toma en cuenta el tipo de dato, y al ser uno string y otro INT, otorga FALSE
    

    console.log(casoB1, "IGUALDAD ESTRICTA"); 

// DESIGUALDAD ( A != B ): busca alguna DESIGUALDAD entre los VALORES dos variables, obviando sus TIPOS de datos
    
    let casoC1 = value_1 != value_1; // FALSE tiene en cuenta SOLO los VALORES, No los TIPOS 
    let casoC2 = value_2 != value_2; // FALSE 
    let casoC3 = {} != {}; //TRUE aunque su contenido sea el mismo, al ser arrays (objetos),  son ubicados en distintos espacio de la memoria
    
    console.log(casoC1,casoC2,casoC3, "DESIGUALDAD SIMPLE");

// DESIGUALDAD ESTRICTA ( A !== B ): Busca alguna desigualdad tanto en los VALORES como en los TIPOS de ambos datos comparados  

    let casoD1 = value_1 !== value_2; //TRUE Toma en cuenta que apesar de la igualdad en los valiores, los tipos de datos son distintos
    
    console.log( casoD1, "DESIGUALDAD ESTRICTA" );

// MAYOR QUE ( A > B ): Compara los valores de dos datos, otorgando true si A es mayor que B
    
        let casoE1 = value_1 > value_3; //TRUE 
        let casoE2 = value_2 > value_3; //TRUE
        let casoE3 = value_5 > value_5; //FALSE


        console.log( casoE1, casoE2,casoE3, " A MAYOR Que B ");

//  MENOR QUE ( A < B ): Compara los VALORES de dos datos, otrogando true si A es MENOR QUE B
        let casoF1 = value_1 < value_3; //FALSE
        let casoF2 = value_2 < value_3; //FALSE
        let casoF3 = value_5 < value_5;//FALSE

        console.log( casoF1, casoF2, casoF3, " A MENOR Que B ");

// MAYOR O IGUAL QUE ( A >= B ): Compara los valores de dos datos, otorgando true si A es MAYOR O IGUAL QUE B
        let casoG1 = value_1 >= value_3; //TRUE
        let casoG2 = value_2 >= value_3; //TRUE
        let casoG3 = value_3 >= value_3;// TRUE
        let casoG4 = value_5 >= value_5;// TRUE

        console.log( casoG1, casoG2, casoG3 , casoG4," A MAYOR O IGUAL Que B ");

// MENOR O IGUAL QUE ( A >= B ): Compara los valores de dos datos, otorgando true si A es MENOR O IGUAL QUE B
        let casoH1 = value_1 <= value_3; //FALSE
        let casoH2 = value_2 <= value_3; //FALSE
        let casoH3 = value_3 <= value_3;// TRUE
        let casoH4 = (value_5 + 3 ) <= (value_5 +  1);// FALSE, javascript convierte cualquier cadena de caracteres a su sitema unicode, y al estar el 3 antes que el 1, es mayor


        console.log( casoH1, casoH2, casoH3 , casoH4," A MENOR O IGUAL Que B ");





/*
        OPERADORES LÓGICOS
         Son operadores que trabajan con expreciones booleanas, natualramnete tratan a asus argumentos desde
        su forma binaria.   Otorgando la posibilidad de hacer algo si se cumple una determinada condición.

*/
        const a = 8;
        const b = 0; 
        const c = -5;

        //OPERADOR AND ( A  &&  B ): Es un operador logico que compara dos argumentos, y solo otorga true, cuando las dos expreciones que les son conferidas son true, sino otorga false

            //              false  &&   true       
            const casoI1 = (a < b ) && ( b > c); // FALSE

            //              true    &&   false       
            const casoI2 = (c < a ) && ( a < b ); // FALSE

            //              true      &&   true       
            const casoI3 = (a === a ) && ( a > c); // TRUE
            
            //              false      &&   false       
            const casoI4 = (a === b ) && ( b === c); // FALSE
        
            console.log(casoI1, casoI2, casoI3, casoI4 , " OPERADOR AND ( A && B )" );



        //OPERADOR OR ( A  ||  B ): Es un operador logico que compara dos argumentos, y solo otorga true, cuando alguno de los dos expreciones que les son conferidas son true, sino otorga false

            //              false   ||  true       
            const casoJ1 = (a < b ) || ( b > c); // TRUE

            //              true    ||  false       
            const casoJ2 = (c < a ) || ( a < b ); // TRUE

            //              true      ||   true       
            const casoJ3 = (a === a ) || ( a > c); // TRUE

            //               false     ||   false       
            const casoJ4 = ( a === b ) ||  ( a < c ); // FALSE
        
            console.log( casoJ1, casoJ2, casoJ3, casoJ4 , " OPERADOR OR ( A || B )" );

        //OPERADOR NOT ( !B ): Es un operador logico que NIEGA el argumento otorgado, si se le otorga una rgumento true, otorgará false, y viceversa.

            //              false        
            const casoK1 = !(a < b ); // TRUE

            //              true         
            const casoK2 = !(c < a ); // FALSE

            //                   !(TRUE)   
            const casoK3 =  !( (a === a ) && ( a > c))   ; //FALSE

    
        
            console.log( casoK1, casoK2, casoK3, " OPERADOR NOT ( !B )" );





/*  
    EJECUCION CONDICIONAL

        IF(){};
*/

        let variable_1 = 25;
        let variable_2 = "25";

        if (variable_1 == variable_2) { 
            
            console.log("La condición era cierta");
            
        }else{
            console.log("La condicion era falsa");
        }


        let condicionTernaria = variable_1 === variable_2 ? "Código cuando es true" : "Código cuando es false";

        console.log(condicionTernaria);