function Mostrar()
{
	var numero;
	var i;
	var cantdivisores=0;
	var numerosDivisores="";

	numero=prompt("ingrese un numero");
	numero=parseInt(numero);

	for(i=1;i<=numero;i++){

		if(numero%i==0){
			cantdivisores++;


			if(i==1){
				numerosDivisores=numerosDivisores+i;
			}

			else{ 
			numerosDivisores=numerosDivisores+"-"+i;
			 }
		}
	}
	numerosDivisores=numerosDivisores+" la cantidad de divisores es: "+cantdivisores;
	
	alert(numerosDivisores);




}//FIN DE LA FUNCIÓN