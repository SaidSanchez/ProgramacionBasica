// Introducir un número por teclado y que nos diga si es par o impar
function validar(num){
 if((num%2) == 0)
 {
   console.log("El numero es par");
 }
 else
 {
   console.log("El numero es impar");
 }
}
let num;
console.log("Ingresa un numero: ");
process.stdin.on('data',function(data){
  num = data.toString();
  validar(num);
  process.exit();
});
