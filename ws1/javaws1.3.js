function lanzamiento(){
	var dado=0;
	var dado1=0;
	var dado2=0;
	var dado3=0;
	var dado4=0;
	var dado5=0;
	var dado6=0;
	for(var i=1; i<=6000; i++){
		dado = Math.floor((Math.random()*6)+1);
		switch (dado){
			case 1:
				dado1++;
				break;
			case 2:
				dado2++;
				break;
			case 3:
				dado3++;
				break;
			case 4:
				dado4++;
				break;
			case 5:
				dado5++;
				break;
			case 6:
				dado6++;
				break;
		}
	}
	document.write("<p>Num de 1: "+dado1+"</p>");
	document.write("<p>Num de 2: "+dado2+"</p>");
	document.write("<p>Num de 3: "+dado3+"</p>");
	document.write("<p>Num de 4: "+dado4+"</p>");
	document.write("<p>Num de 5: "+dado5+"</p>");
	document.write("<p>Num de 6: "+dado6+"</p>");
}
lanzamiento();