var  caja = [];
var d = document.getElementById("dinero_a_retirar");
var b = document.getElementById("retirar");
var resultado = document.getElementById("resultado");
b.addEventListener("click", entregarLaPlata)


var cincuenta = new Billete(50, 6);
var veinte =  new Billete(20, 10);
var diez = (new Billete(10, 10));
caja.push(cincuenta);
caja.push(veinte);
caja.push(diez);

function entregarLaPlata()
{
	resultado.innerHTML = "";
	var entregado = [];
	var dinero = parseInt(d.value);
	if (dinero < nSaldo())
	{
		resultado.innerHTML += ("Saldo anterior: " + nSaldo() + "<br/>");
  	for (b of caja)
  	{
  		 if (dinero > 0)
  		{
	  			var papeles = Math.floor (dinero/b.valor);
	  			if (papeles > b.cantidad)
	  			{
	  				papeles = b.cantidad;
	  			}
	  				entregado.push(new Billete(b.valor, papeles));
	  				dinero = dinero - (b.valor * papeles);
	  				b.cantidad = b.cantidad - papeles;
  			}
  	 }
		 // corregir esta entregando dinero cuando los billetes no son multiplos de 10
		 if (dinero == 0)
		  {
				 for (r of entregado)
				 {
					 if (r.cantidad > 0 )
					 {
						 resultado.innerHTML +=  "Entregado " + r.cantidad + " billetes de:  <br/>" ;
						 resultado.appendChild(r.img);
						 resultado.innerHTML += "<br/>"
				   }
				 }
			} else
				{
					resultado.innerHTML = ("Por favor ingrese valores multiplos de 10 <br/>");
				}

				 	resultado.innerHTML += ("Nuevo Saldo: " + nSaldo() + "<br/>");
				} else
					{
					resultado.innerHTML = ("Saldo insuficiente, te falta plata");
					}
}

function nSaldo()
{
	var saldo = 0;
	for (b of caja)
	{
		saldo = saldo + (b.valor * b.cantidad)
	}
	return saldo;
}