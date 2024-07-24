console.log("Experimentando con Let y Var");

let globaLet = "global";
var globalVar = "global";

console.log("resultado de X = "+ this.globaLet);
console.log("resultado de y = "+  this.globalVar);


//Alcance(scope) de let y de var 

console.log("Scope del let y de var");


if(true){
    let CajaLet = "Variable Let";
    var CajaVar = "Variable Var";

    console.log(CajaLet + " adentro del if"); //mostrará el mensaje
    console.log(CajaVar + " adentro del if"); //mostrará el mensaje

}
    console.log(CajaVar + " afuera del if");  //mostrará el mensaje
    console.log(CajaLet + " adentro del if"); //Saldrá Undefine
  



