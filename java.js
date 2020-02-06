var prixBisousnours = 15;
var prixBarbie = 91;
var prixPoney = 24;
var cpt = 0;

function randomImg(){
   var tabImg = new Array();
   tabImg[0]  = "poney.jpg";
   tabImg[1]  = "barbie.jpg";
   tabImg[2]  = "bisounours.jpg";

}

randomImg();
function activ(){
	var prix = document.getElementById("prix").value;
	cpt++;

	if (prix > prixBisousnours){
		alert("c'est moins");
	}
	else if (prix < prixBisousnours){
		alert("c'est plus");
	}
	else{
		alert("tu as gagnes en " + cpt +"coups")
	}
	
}	

