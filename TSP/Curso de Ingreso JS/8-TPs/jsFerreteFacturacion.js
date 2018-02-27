/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var numero1, numero2, numero3, suma;
	numero1=document.getElementById('PrecioUno').value;
	numero1=parseInt(numero1);
	numero2=document.getElementById('PrecioDos').value;
	numero2=parseInt(numero2);
	numero3=document.getElementById('PrecioTres').value;
	numero3=parseInt(numero3);
	suma=numero1+numero2+numero3;
	alert("Suma: "+suma);
}
function Promedio () 
{
	var numero1, numero2, numero3, suma;
	numero1=document.getElementById('PrecioUno').value;
	numero1=parseInt(numero1);
	numero2=document.getElementById('PrecioDos').value;
	numero2=parseInt(numero2);
	numero3=document.getElementById('PrecioTres').value;
	numero3=parseInt(numero3);
	suma=numero1+numero2+numero3;
	alert("Promedio: "+suma/3);
}
function PrecioFinal () 
{
	var numero1, numero2, numero3, suma, preciofinal;
	numero1=document.getElementById('PrecioUno').value;
	numero1=parseInt(numero1);
	numero2=document.getElementById('PrecioDos').value;
	numero2=parseInt(numero2);
	numero3=document.getElementById('PrecioTres').value;
	numero3=parseInt(numero3);
	suma=numero1+numero2+numero3
	preciofinal=suma*1.21;
	alert("Precio final: "+preciofinal);
}