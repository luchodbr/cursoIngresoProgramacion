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
		}
		}
		if(cantdivisores==2){
			alert("Es primo");
		}
			else{
				alert("no es primo");
			}
		




}//FIN DE LA FUNCIÓN