function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);
	
	switch (mesDelAño)
	{
		case "Enero" :
		case "Marzo" :
		case "Mayo" :
		case "Julio" :
		case "Agosto" :
		case "Octubre" :
		case "Diciembre" :

			alert("Este mes si tiene 31 días");
			break;
		
		case "Febrero" :
		
			alert("Este mes si tiene 28 días");
			break;
		
		default:
		
			alert("Este mes si tiene 30 días");
			break;
		
		
	}



}//FIN DE LA FUNCIÓN