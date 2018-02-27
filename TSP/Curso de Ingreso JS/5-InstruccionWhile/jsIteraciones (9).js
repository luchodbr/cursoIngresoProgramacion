function Mostrar()
{
	var numero;
	var max=0;
	var min=0;
	var respuesta=true;

	while(respuesta==true){
		numero=parseInt(prompt("Ingrese un numero"));
		if(numero>max)
		{
			max=numero;
		}	
		else if(numero<min)
		{
			min=numero;
		}

		respuesta=confirm("Desea continuar?");
	}

	
	document.getElementById("maximo").value=max;
	document.getElementById("minimo").value=min;



}//FIN DE LA FUNCIÓN