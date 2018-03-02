//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero; 
	var i;
	var numin=0;
	var numax=0;


	for(i=1;i<=7;i++){
		numero=parseInt(prompt("Ingrese un valor"));
		while(numero<=0){
			venta=parseInt(prompt("ingrese otro valor"));
		}
		if(i==1){
			numin=numero;
			numax=numero;
		}
		if(numero>numax){
			numax=numero;
		}
		if(numero<numin){
			numin=numero;
		}
	}
	alert("El importe maximo es "+numax);
	alert("El importe minimo es "+numin);

}

