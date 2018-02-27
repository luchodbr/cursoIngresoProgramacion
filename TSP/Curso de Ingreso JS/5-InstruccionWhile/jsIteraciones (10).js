function Mostrar()
{

	var acumpos=0;
	var acumneg=0;
	var contpos=0;
	var contneg=0;
	var cantcero=0;
	var respuesta=true;
	var cantpares=0;
	var promepos=0;
	var promneg=0;
	var difcont=0;
	var dif=0;
	while(respuesta==true){
		numero=parseInt(prompt("Ingrese un numero"));

		if(numero>0)
			{acumpos=acumpos+numero;
				contpos++;

		}
		else if(numero<0)
		{
			acumneg=acumneg+numero;
			contneg++1;
		}
		else
		{
			cantcero++;

		}

		if(numero%2=0)
		{
			cantpares++;
		}	
		promepos=acumpos/contpos;
		promneg=acumneg/contneg;
		difcont=contpos-contneg;
		dif=acumpos-acumneg;


		document.write("suma neg: "+acumneg);
		document.write("<br> suma pos: "+acumpos);
		document.write("<br> cantidad positivos: "+contpos);
		document.write("<br> cantidad negativos: "+contneg);
		document.write("<br> cantidad de ceros: "+cantcero);
		document.write("<br> cantidad de numeros pares: "+cantpares);
		document.write("<br> promedio de positivos: "+promepos);
		document.write("<br> promedio de negativos: "+promneg);
		document.write("<br> diferencia de cantidad de positivos y negativos: "+difcont);
		document.write("<br> diferencia de totales: "+dif);

	
		
	
	



}//FIN DE LA FUNCIÓN