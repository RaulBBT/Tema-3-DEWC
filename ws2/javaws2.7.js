function aCero(array){
	for (var i=0; i<array.length;i++){
		array[i]="0";
	}
	document.write(""+array[0]);
}
var myArray = new Array();
aCero(myArray);