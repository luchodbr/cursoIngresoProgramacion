/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1, numero2, suma;
	numero1=document.getElementById("numeroUno").value;
	numero1=parseInt(numero1);
	numero2=document.getElementById("numeroDos").value;
	numero2=parseInt(numero2);
	suma=(numero1+numero2);
	alert("La suma de los numeros ingresados es: "+suma);
}

function restar()
{
	var numero1, numero2, resta;
	numero1=document.getElementById("numeroUno").value;
	numero1=parseInt(numero1);
	numero2=document.getElementById("numeroDos").value;
	numero2=parseInt(numero2);
	resta=(numero1-numero2);
	alert("La resta de los numeros ingresados es: "+resta);
}

function multiplicar()
{ 
	var numero1, numero2, multiplicacion;
	numero1=document.getElementById("numeroUno").value;
	numero1=parseInt(numero1);
	numero2=document.getElementById("numeroDos").value;
	numero2=parseInt(numero2);
	multiplicacion=(numero1*numero2);
	alert("La multiplicacion de los numeros ingresados es: "+multiplicacion);
}

function dividir()
{
	var numero1, numero2, division;
	numero1=document.getElementById("numeroUno").value;
	numero1=parseInt(numero1);
	numero2=document.getElementById("numeroDos").value;
	numero2=parseInt(numero2);
	division=(numero1/numero2);
	alert("La division de los numeros ingresados es: "+division);
}

