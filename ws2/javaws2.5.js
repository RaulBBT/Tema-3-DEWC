function parseImpares(){
	var myArray = new Array();
	for (var i=0; i<100; i++){
		var rand = Math.floor((Math.random()*1000)+1);
		myArray = myArray.concat(rand); 
	}
	document.write("<table>");
	document.write("<tr>");
	for (var x=0; x<myArray.length; x++){
		document.write("<td>"+myArray[x]+"</td>");
	}
	document.write("</tr>");
	for (var j=0; j<myArray.length;j++){
		if (myArray[j]%2==0){
			myArray.push(myArray[j]);
			myArray.splice(j,1);
		}
	}
	document.write("<tr>");
	for (var x=0; x<myArray.length; x++){
		document.write("<td>"+myArray[x]+"</td>");
	}
	document.write("</tr>");
	document.write("</table>");
}
parseImpares();