function Mostrar()
{
	var numero=0;
	var mensaje="";

	while(numero<10){
		numero=numero+1
		if(numero==1){
			mensaje=(mensaje+numero)
		}
		else{

				mensaje=(mensaje+"-"+numero)
			}

		
	}
	alert(mensaje)
	
}//FIN DE LA FUNCIÓN