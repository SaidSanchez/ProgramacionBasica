//Introducir tantas frases como queramos y contarlas
let frases = [];
let cont = 0;
console.log("Para salir del contador, escribe salir");
console.log("Introduzca una frase: ");

process.stdin.on('data', function(data){
    frases.push(data.toString().trim());
    if(frases[frases.length - 1] == "salir" || "SALIR"){
      process.exit();
    }
    cont++;
    console.log("Llevas " + cont + " frases.\n");
});
