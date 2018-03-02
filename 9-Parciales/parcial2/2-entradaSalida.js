//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero=0;
	var importeFinal=0;
	numero=prompt("Ingrese el valor");
	numero=parseInt(numero);
	importeFinal=numero*0.75;
	
	document.getElementById("importeFinal").value=importeFinal;	
}

