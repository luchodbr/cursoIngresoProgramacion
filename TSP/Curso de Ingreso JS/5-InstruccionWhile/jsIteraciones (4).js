function Mostrar()
{
	var numero
	numero=prompt("ingresar numero");
	numero=parseInt(numero);
	while(numero<0 || numero>9){
	numero=prompt("ingresar numero");
	numero=parseInt(numero);
	}
	alert("Numero correcto");
	document.getElementById("Numero").value=numero;
	

}//FIN DE LA FUNCIÓN