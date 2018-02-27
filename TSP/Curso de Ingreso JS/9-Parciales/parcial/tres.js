function Mostrar()
{
	var largo;
	var ancho;
	var alambre;

	largo=document.getElementById("largo").value;
	ancho=document.getElementById("ancho").value;
	largo=parseInt(largo);
	ancho=parseInt(ancho);
	alambre=3*(2*ancho+2*largo);
	alert("el alambre necesario es: "+alambre );



}
