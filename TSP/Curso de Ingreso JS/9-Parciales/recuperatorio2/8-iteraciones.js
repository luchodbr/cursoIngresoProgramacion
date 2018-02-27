//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero;
	var respuesta=true;
	var	conPar=0;
	var	prom;
	var suma=0;
	var max;
	var min;
	var contador=0;

	while(respuesta==true){ 

		numero=parseInt(prompt("Ingrese un numero"));
		while(numero<=0){
		numero=parseInt(prompt("Ingrese un numero"));
		}
		if(contador==0 || numero>max){
		max=numero;
		}
		if(contador==0 || numero<min){
		min=numero
		}
		contador++;

		suma=suma+numero
		if(numero%2==0){
		conPar++
		}
		
		respuesta=confirm("continuar?");

		
	}
		prom=suma/contador;
		document.write("a) "+conPar+"<br>"+"b) "+prom +"<br>"+"c)"+suma+"<br>"+"d)"+"max "+max +"min "+min);


}

