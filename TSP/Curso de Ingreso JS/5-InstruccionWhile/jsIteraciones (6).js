function Mostrar()
{
	var contador=0;
	var numero;
	var suma=0;
	while(contador<5){
		numero=prompt("Ingrese Numero");
		numero=parseInt(numero);
		contador++;
		suma=parseInt(suma);
		suma=suma+numero;
	}
	document.getElementById("suma").value=suma;
	document.getElementById("promedio").value=(suma/contador);
	
	




}//FIN DE LA FUNCIÓN