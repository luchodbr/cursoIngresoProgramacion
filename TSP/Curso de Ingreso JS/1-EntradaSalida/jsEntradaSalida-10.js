/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe, total;
	importe=document.getElementById("importe").value;
	importe=parseInt(importe);
	total=(importe - ((25*importe)/100));
	document.getElementById("resultado").value=total;
}
