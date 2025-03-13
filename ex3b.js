/**
 * Contesta a todas las preguntas. En este ejercicio no tienes que codificar nada.
 */

function isPositive(num) {
  return num > 0;
}

/**
 * 1. ¿Que nombre tiene esta función? isPositive()
 * 2. ¿Que deberíamos escribir para ejecutar esta función? invocarla con su nombre
 * 3. ¿Qué tipo de datos devuelve esta función? ¿Un string, un number o un boolean? booleana
 * 4. El código de abajo usa la función isPositve. ¿La usa adecuadamente? ¿Por qué? La usa del revés porque lo que evalúa es si el número envíado como parámetro es mayor que 0
 */

let x = 4;
if (isPositive(x)) {
  console.log("El número es negativo");
} else {
  console.log("El número es positivo");
}
