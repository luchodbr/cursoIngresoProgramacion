function Mostrar()
{
	var importe;
	importe=prompt("ingrese el valor del producto: ");
	importe=parseInt(importe);
	document.getElementById("importeFinal").value=(importe*1.21);
  
}
