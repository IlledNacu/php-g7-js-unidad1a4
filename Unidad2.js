/*    Unidad 2
9. Se le solicita al usuario que ingrese su nombre y luego su apellido. Realice un programa que arme y muestre el mensaje "Bienvenido", 
    seguido del nombre y apellido del usuario. */

    var nombre = prompt("Ingresa tu nombre:");
    var apellido = prompt("Ingresa tu apellido:");
    var mensajeBienvenida = "Bienvenido, " + nombre + " " + apellido + "!";
    alert(mensajeBienvenida); 
    
    /*10. Se le solicita al usuario que ingrese el diámetro de un círculo. Realice un programa para calcular e informar el perímetro 
        y el área del círculo. Se considerará para este ejercicio que el valor de PI será 3.1416.*/
        const pi=3.1416
        var diametro = prompt("Ingresa el diámetro del círculo:");
        var radio=diametro/2;
        var resultado = "El perímetro es de:  " + 2*pi*radio + " unidades lineales y el área es de  " + pi*(radio**2) + " unidades cuadradas!";
        alert(resultado); 
    
    /*11. Se le solicita al usuario que ingrese 4 números. Realice un programa para calcular e informar la suma y el promedio.*/
        var numero1 = parseFloat(prompt("Ingresa el primer número:"));
        var numero2 = parseFloat(prompt("Ingresa el segundo número:"));
        var numero3 = parseFloat(prompt("Ingresa el tercer número:"));
        var numero4 = parseFloat(prompt("Ingresa el cuarto número:"));
        var suma = numero1 + numero2 + numero3 + numero4;
        var promedio = suma / 4;
        alert("La suma de los números es: " + suma);
        alert("El promedio de los números es: " + promedio.toFixed(2)); 
    
    /*12. Realizar un sistema para el cálculo de sueldos de una empresa. Se le solicita que ingrese el valor de la hora y la cantidad de 
        horas trabajadas en el mes. Realice un programa para calcular e informar el sueldo mensual del empleado.*/
        var pagoporhora = parseFloat(prompt("Ingresa el pago por hora:"));
        var horas = parseFloat(prompt("Ingresa las horas laburadas:"));
        var sueldo = parseFloat(pagoporhora*horas);
        alert("El pago es de : " + sueldo); 
    
    /*13. Realizar un sistema para el cálculo de sueldos de una empresa. Se le solicita que ingrese el valor de la hora, la cantidad de 
        horas trabajadas en el mes y los años de antigüedad en la empresa. Realice un programa para calcular e informar el sueldo mensual 
        del empleado, teniendo en cuenta que se le asigna un bono mensual igual al 15% del sueldo por año de antigüedad.*/
        var pagoporhora = parseFloat(prompt("Ingresa el pago por hora:"));
        var horas = parseFloat(prompt("Ingresa las horas laburadas:"));
        var aniosdeantiguedad=parseFloat(prompt("Ingresa la antiguedad en la empresa en años:"));
        var bonoporantiguedad=aniosdeantiguedad*0.15
        var sueldototal = parseFloat(pagoporhora*horas+bonoporantiguedad);
        alert("El pago es de : " + sueldototal); 
    
    /*14. Realizar un sistema para el cálculo de sueldo de una empresa de seguros. Se le solicita que ingrese el valor de la hora, 
        la cantidad de horas trabajadas en el mes, los años de antigüedad, la cantidad de seguros vendidos y el valor del seguro más 
        caro vendido. Realice un programa para calcular e informar el sueldo mensual del empleado, teniendo en cuenta que se le asigna 
        un bono igual al 50% del seguro más caro vendido, un bono igual al 25% del sueldo por la cantidad de seguros vendidos 
        y otro bono igual al 15% del sueldo por año de antigüedad. Una vez obtenido el sueldo final, 
    calcular e informar el valor promedio de la hora del empleado.*/
        var pagoporhora = parseFloat(prompt("Ingresa el pago por hora:"));
        var horas = parseFloat(prompt("Ingresa las horas laburadas:"));
        var aniosdeantiguedad=parseFloat(prompt("Ingresa la antiguedad en la empresa en años:"));
        var importedesegurosvendidos=parseFloat(prompt("importe del total de seguros vendidos:"));
        var valseguromascaro=parseFloat(prompt("Valor del seguro más caro:"));
        var bonoporsegurocaro=parseFloat(valseguromascaro*.5);
        var bonoporsegurosvendidos=parseFloat(importedesegurosvendidos*.25);
        var bonoporantiguedad=aniosdeantiguedad*0.15
        var sueldototal = parseFloat(pagoporhora*horas+bonoporsegurocaro+bonoporsegurosvendidos+bonoporantiguedad);
        var valorpromedioporhora = parseFloat(sueldototal/horas);
        alert("El valor promedio por hora del empleado es de: " + valorpromedioporhora); 
    