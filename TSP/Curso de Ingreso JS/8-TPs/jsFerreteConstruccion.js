/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo, ancho, cantidad;
		
	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);

	cantidad=((largo*2)+(ancho*2))*3;
	alert("Cantidad de alambre a comprar: "+cantidad);

}

function Circulo () 
{
	var radio, perimetro, cantidad;
		
	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);
	perimetro=2*radio*3.14;

	cantidad=perimetro*3;
	alert("Cantidad de alambre a comprar: "+cantidad);
}

function Materiales () 
{
	var largo, ancho,metrocuadrado, cantcemento, cantcal;
		
	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);

	metrocuadrado=largo*ancho;

	cantcemento=2*metrocuadrado;
	cantcal=3*metrocuadrado;	

	alert("Cantidad de cemento: "+cantcemento);
	alert("Cantidad de cal: "+cantcal);
}