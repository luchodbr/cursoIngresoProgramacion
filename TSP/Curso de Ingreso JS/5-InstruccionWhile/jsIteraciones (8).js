function Mostrar()
{
	var numero;
	var acumpos=0;
	var acumneg=1;
	var respuesta=true;

	while(respuesta==true){
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		if(numero>=0)
		{
			acumpos=acumpos+numero;


		}	
		else
		{
			acumneg=acumneg*numero;

		}

		respuesta=confirm("Desea continuar?");
	}

	
	document.getElementById("suma").value=acumpos;
	document.getElementById("producto").value=acumneg;


	

}//FIN DE LA FUNCIÓN