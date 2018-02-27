/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var valsueldo, aumento;

	valsueldo=document.getElementById("sueldo").value;
	valsueldo=parseInt(valsueldo);
	
	aumento=(valsueldo + ((10*valsueldo)/100));
	document.getElementById("resultado").value=aumento;
}
