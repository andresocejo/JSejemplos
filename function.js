
/* IMPRIME LOS NUMEROS 10 Y 20

function imprimeNumeros(argumento1,argumento2){
    alert(argumento1);
    alert(argumento2);
}

var numero1= 10;
var numero2= 20;

imprimeNumeros (numero2,numero1);
*/


/* AREA DE UN CUADRADO

var lado = prompt("Dame el lado del cuadrado");
areaCuadrado(lado);

function areaCuadrado(lado){
var area = (lado*lado);
    
alert("El area del cuadrado es:   "+area);   
}
*/


/* AREA DE UN RECTANGULO

var altura = prompt("Dame la altrua del rectangulo");
var base = prompt("Dame la base del rectangulo");
areaRectangulo(altura,base);

function areaRectangulo(h,b){
var area = h*b;
    
alert("El area del rectangulo es:   "+area);   
}
*/


/* AREA DE UN CIRCULO
var radio = Number(prompt("Dame el radio de el circulo"));
areacirculo(radio);

function areacirculo(r){
var area = (r^2)*Math.PI;
    
alert("El area del circulo es:   "+area);   
}
*/

/*
function areaCirculoTres(){
    var pi = 3.1416
    var diametro = Number(prompt("Ingresa diametro de Circulo 3: "));
    var radio = diametro / 2;
    var radioAlCuadrado = Math.pow(radio,2);
    
    var area = pi * radioAlCuadrado;
    
    return  area;
}

var areaDeCirculo = areaCirculoTres;

alert ("El area es igual a :  "+areaDeCirculo);
*/


/* EJEMPLO DE IF , ELSE IF, ELSE
var pregunta = escenarios ();

alert (pregunta);

function escenarios(){
    var pregunta = prompt("Dime si eres valiente, inteligente o guapo?");
  
    
    
if (pregunta=="inteligente"){
    var respuesta1 = ("Eres el siguiente Steve Jobs");
    return respuesta1
}

else if (pregunta=="guapo"){
    var respuesta2 = ("Eres el siguiente David Beckham");
    return respuesta2
}

else if (pregunta=="valiente"){
    var respuesta3 = ("Unete al ejercito de 300 espartanos");
    return respuesta3
}

else {
    var respuesta4 = ("Eres un average Joe");
    return respuesta4
}
    
}
*/





