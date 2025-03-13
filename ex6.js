/**
 * Implementa una función que calcule el área de una esfera dado su radio.
 * Fórmula del área de una esfera: A = 4 * π * r²
 */

function sphereArea(radius) {
    return 4*Math.PI*Math.pow(radius, 2);
}

console.log("Area de la esfera para el valor 1: ", sphereArea(1));  // ≈ 12.5664
console.log("Area de la esfera para el valor 3: ", sphereArea(3));  // ≈ 113.097
console.log("Area de la esfera para el valor 5: ", sphereArea(5));  // ≈ 314.159