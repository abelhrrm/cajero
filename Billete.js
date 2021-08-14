class Billete {
	constructor(v, c)
	{
	 this.img = new Image();
	 this.valor = v;
	 this.cantidad = c;
	 this.img.src = v.toString() + ".png";
	}
}
