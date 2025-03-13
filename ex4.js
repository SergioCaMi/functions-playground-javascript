/**
 * Implementa una función que simule el lanzamiento de un dado de 6 caras.
 */
let x;
let y;
function rollDice(x, y) {
    return Math.floor(Math.random() * y) + x;
}

console.log(rollDice(1, 6)); // Un número entre 1 y 6
console.log(rollDice(2, 6)); // Un número entre 2 y 10
console.log(rollDice(5, 100)); // Un número entre 1 y 6