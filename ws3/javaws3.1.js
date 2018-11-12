class Puzle {
	constructor(dimension){
		this.dimension=dimension;
	}
	getDimension(){
		return this.dimension;
	}
}

var dim = prompt("Introduce una dimension para el puzle (un numero 3-10)");
	if (dim==3 || dim==4 || dim==5 || dim==6 || dim==7 || dim==8 || dim==9 || dim==10){
		var p = new Puzle(dim);
	}else{
		document.write("Dimension incorrecta.");
	}
	var d=p.getDimension();
	
function moverPieza(id){
	var cajaclicada=document.getElementById(id);
		if (id<=d){
			if (id==1){
				var mirarcajader=document.getElementById(2);
				if (d==3){
					var mirarcajabaj=document.getElementById(4);
				}
				if (mirarcajader.style.backgroundColor == "grey"){
					mirarcajader.style.backgroundColor = cajaclicada.style.backgroundColor;
					cajaclicada.style.backgroundColor = "grey";
				}
				if (mirarcajabaj.style.backgroundColor == "grey"){
					mirarcajabaj.style.backgroundColor = cajaclicada.style.backgroundColor;
					cajaclicada.style.backgroundColor = "grey";
				}
			}
			if (id==d){
				var mirarcajaiz=document.getElementById(d-1);
				var mirarcajabaj=document.getElementById(d*2);
				if (mirarcajaiz.style.backgroundColor == "grey"){
					mirarcajaiz.style.backgroundColor = cajaclicada.style.backgroundColor;
					cajaclicada.style.backgroundColor = "grey";
				}else if (mirarcajabaj.style.backgroundColor == "grey"){
					mirarcajabaj.style.backgroundColor = cajaclicada.style.backgroundColor;
					cajaclicada.style.backgroundColor = "grey";
				}
			}3
			
			var mirarcajaiz=document.getElementById(""+(parseInt(id)-1));
			var mirarcajabaj=document.getElementById(""+(parseInt(id)+parseInt(d)));
			var mirarcajader=document.getElementById(""+(parseInt(id)+1));
			if (mirarcajader.style.backgroundColor == "grey"){
					mirarcajader.style.backgroundColor = cajaclicada.style.backgroundColor;
					cajaclicada.style.backgroundColor = "grey";
				}
			if (mirarcajabaj.style.backgroundColor == "grey"){
					mirarcajabaj.style.backgroundColor = cajaclicada.style.backgroundColor;
					cajaclicada.style.backgroundColor = "grey";
			}
			if (mirarcajaiz.style.backgroundColor == "grey"){
					mirarcajaiz.style.backgroundColor = cajaclicada.style.backgroundColor;
					cajaclicada.style.backgroundColor = "grey";
			}
		}
	}	
	
function construirPuzle (){
	document.write("<table border=1px; width=200px; height=200px;>");
	var cont=1;
	for(var i=1; i<=d; i++){
		document.write("<tr>");
		for (var j=1; j<=d; j++){
			document.write("<td id="+cont+" onclick='moverPieza(id)'>");
			document.write("</td>");
			cont++;
		}
		document.write("</tr>");
	}
	document.write("</table>");
	var mult=d*d;
	//Cajas rojas y amarillas
	var myArray = []
	while(myArray.length < mult ){
		var numeroAleatorio = Math.ceil(Math.random()*mult);
		var existe = false;
		for(var i=0;i<myArray.length;i++){
			if(myArray [i] == numeroAleatorio){
				existe = true;
				break;
			}
		}
		if(!existe){
			myArray[myArray.length] = numeroAleatorio;
		}
	}
	for (var i=1; i<=d;i++){
		var cajaroja = document.getElementById(""+myArray[i]);   
		cajaroja.style.backgroundColor = "red";
		var cajaamarilla = document.getElementById(""+myArray[mult-i]);   
		cajaamarilla.style.backgroundColor = "yellow";
	}
	//Caja hueca
		var cajahueca = document.getElementById(""+myArray[mult-d-1]);   
		cajahueca.style.backgroundColor = "grey"; 
	
	
}
construirPuzle();
