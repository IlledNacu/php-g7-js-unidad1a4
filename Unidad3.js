/*Unidad 03 */
//15. Se le solicita al usuario que ingrese un número. Realice un programa para informar si el número es cero, par o impar.
var numero = parseInt(prompt("Ingresa un número:"));
if (numero === 0) {
    alert("El número es cero.");
} else {
    if (numero % 2 === 0) {
        alert("El número es par.");
    } else {
        alert("El número es impar.");
    }
}

//6. Se le solicita al usuario que ingrese un número. Realice un programa para informar si el número es múltiplo de 3.
var numero = parseInt(prompt("Ingresa un número:"));
if (numero === 0) {
    alert("El número es cero.");
} else {
    if (numero % 3 === 0) {
        alert("El número es múltiplo de 3.");
    } else {
        alert("El número no es múltiplo de 3.");
    }
}

//17. Se le solicita al usuario que ingrese una letra. Realice el algoritmo para informar si el valor ingresado es una vocal.
var letra = prompt("Ingresa una letra:").toLowerCase();
if (letra.length === 1 && /[aeiou]/.test(letra)) {
    alert("El valor ingresado es una vocal.");
} else {
    alert("El valor ingresado no es una vocal.");
}

/*18. Se le solicita al usuario que ingrese los extremos de un rango numérico y un número. 
Realice un programa para informar si el número está dentro del rango.
Si está en rango, informar si el número es par.
Si no está dentro del rango, informar si el número es impar.
Tenga en cuenta que el rango debe tener una diferencia mínima de 5 números enteros.*/
if (extremoSuperior - extremoInferior < 5) {
    alert("La diferencia mínima del rango debe ser de al menos 5 números enteros.");
} else {
    if (numero >= extremoInferior && numero <= extremoSuperior) {
        if (numero % 2 === 0) {
            alert("El número es par.");
        } else {
        alert("El número es impar.");
        }
    } else {
        alert("El número está fuera de rango.");
    }
}


/*19. Se le solicita al usuario que ingrese dos números y un operador (+, -, *, /). Realice un programa para calcular e informar 
la operación solicitada entre ambos números. */
var numero1 = parseFloat(prompt("Ingresa el primer número:"));
var numero2 = parseFloat(prompt("Ingresa el segundo número:"));
var operador = prompt("Ingresa un operador (+, -, *, /):");
var resultado;

switch (operador) {
    case "+":
        resultado = numero1 + numero2;
        break;
    case "-":
        resultado = numero1 - numero2;
        break;
    case "*":
        resultado = numero1 * numero2;
        break;
    case "/":
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
        } else {
            alert("No se puede dividir por cero.");
        }
        break;
    default:
        alert("Ingrese un operador válido.");
        break;
}

if (resultado !== undefined) {
    alert("El resultado de la operación es: " + resultado);
}


/*20. Se le solicita al usuario que ingrese los tres lados de un triángulo. Realice el algoritmo para informar si el triángulo 
es equilátero, isósceles o escaleno.*/
var lado1 = parseFloat(prompt("Ingresa el valor del lado 1:"));
var lado2 = parseFloat(prompt("Ingresa el valor del lado 2:"));
var lado3 = parseFloat(prompt("Ingresa el valor del lado 3:"));

if (lado1 === lado2 && lado1 === lado3 && lado2 === lado3) {
    alert("Es un triángulo equilátero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    alert("Es un triángulo isósceles");
} else {
    alert("Es un triángulo escaleno");
}


/*21. Realizar un sistema para el cálculo de sueldo de una empresa. Se le solicita al usuario que ingrese la categoría a la que 
pertenece que define el sueldo básico mensual 
(categoría 1: u$s 2000, categoría 2: u$s 3000, categoría 3: u$s 4000) y las horas extras. Se sabe que:
a. Si es de la categoría 1 y trabajó más de 20 horas extra, suma un bono de u$s 500 más.
b. Si es de la categoría 3 y trabajó más de 30 horas extra, suma un bono de u$s 1000 más.
Realice un programa para calcular e informar el sueldo mensual del empleado, indicando si su sueldo supera o no los u$s 4000. */
var categoria = parseInt(prompt("Ingresa la categoría (1, 2, o 3):"));
var horasExtras = parseInt(prompt("Ingresa las horas extras trabajadas:"));
var sueldoBase;
switch (categoria) {
    case 1:
        sueldoBase = 2000;
        if (horasExtras > 20) {
            sueldoBase += 500;
        }
        break;
    case 2:
        sueldoBase = 3000;
        break;
    case 3:
        sueldoBase = 4000;
        if (horasExtras > 30) {
            sueldoBase += 1000;
        }
        break;
    default:
        alert("Categoría no válida.");
        break;
}

var sueldoTotal = sueldoBase;
if (sueldoTotal > 4000) {
    alert("felicidades, su sueldo supera los u$s 4000.");
} else {
    alert("Su sueldo no supera los u$s 4000.");
}
alert("Su sueldo mensual es: u$s " + sueldoTotal.toFixed(2));