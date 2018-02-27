//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo=parseInt(document.getElementById("largo").value);
	var ancho=parseInt(document.getElementById("ancho").value);
	var perimetro

	perimetro=((2*ancho)+(2*largo))*6;
		alert("el perimetro es "+perimetro)	;
}

