
"use strict";


/* class Img(id, name){
		
	this.name = name;
	this.id = id;
	
} */



$(document).ready(function(){
	
	let sec = 60;
	let min = 0;
	
	let imgName = ["chariot.png", "hangedman.png", "heirophant.png", "empress.png", "hermit", "highpriestess.png", "magician.png", "moon.png"];

	let img = randImages(imgName);
	
	var x = setInterval(function() {
		sec = sec - 1;
	}, 1000);
	
});

function randImages(arr){
	
	var img = new Array(16);
	var idx = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
	var j;
	
	for(let i = 0; i < 8; i++){
		
		j = Math.floor(Math.random()*idx.length);		
		img[idx[j]] = arr[i];
		idx.splice(j,1);
		
		j = Math.floor(Math.random()*idx.length);		
		img[idx[j]] = arr[i];
		idx.splice(j,1);
		
	}
	
	/* for(let j = 0; j < img.length; j++){
		console.log(img[j]);
	} */
	
	return img;
	
}






