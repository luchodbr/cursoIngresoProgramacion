function Mostrar()
{
	var venta;
	var	max;
	var min;
	var i;

		for(i=0;i<24;i++){

				venta=parseInt(prompt("Ingrese el valor"));
			while(venta<=0){
				venta=parseInt(prompt("Ingrese el valor"));
			}
			if(i==0 || venta<min){
				min=venta;

			}
			if(i==0 || venta>max){
				max=venta;
			}
		}
		alert("El maximos es "+max);
		alert("El minimo es "+min);
}
