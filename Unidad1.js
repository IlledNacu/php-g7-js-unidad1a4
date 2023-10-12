//1.Realice un algoritmo que muestre el nombre y apellido de un usuario

var nombre = "Illed"
var apellido = "Nacucchio"

console.log(nombre, apellido);

//2. Realice un algoritmo que muestre el promedio de 3 notas

var nota1 = 10
var nota2 = 8.50
var nota3 = 7

var promedio = (nota1 + nota2 + nota3)/3
console.log("Promedio: " + promedio)

//3. Realice el algoritmo para calcular e informar el perímetro del triángulo.

var lado1 = 7
var lado2 = 6
var lado3 = 5

var perimetro = lado1 + lado2 + lado3
console.log("Perímetro del triángulo: " + perimetro)

//4. Realice el algoritmo para calcular e informar el perímetro y el área del cuadrado.

var lado = 10

perimetro = 10 * 4

var area = 10**2

console.log("Perímetro del cuadrado: " + perimetro)
console.log("Área del cuadrado: " + area)

//5. Realice el algoritmo para calcular e informar el perímetro y el área del rectángulo.

var altura = 8
var base = 6

perimetro = altura * 2 + base * 2
area = altura * base

console.log("Perímetro del rectángulo: " + perimetro)
console.log("Área del rectángulo: " + area)

//6. Realice el algoritmo para calcular e informar el resto de la división entera entre los valores.

var valor1 = 9
var valor2 = 4

var resto = 9%4
console.log("El resto de dividir " + valor1 + " por " + valor2 + " es " + resto)

//7. Realice el algoritmo que arme y muestre el mensaje "Bienvenido", seguido del nombre y apellido del usuario.

console.log("Bienvenido/a " + nombre, apellido);

//8. Realice el algoritmo para calcular e informar el perímetro y el área del círculo. Se considerará para este ejercicio que el valor de PI será 3.1416.

var pi = 3.1416
var diametro = 70
var radio = 25
perimetro = pi * diametro
area = pi * (radio**2)

console.log("Perímetro del círculo: " + perimetro)
console.log("Área del círculo: " + area)