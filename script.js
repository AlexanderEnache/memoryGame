
"use strict";


/* class Img(id, name){
		
	this.name = name;
	this.id = id;
	
} */



$(document).ready(function(){

	
	let sec = 60;
	let min = 0;
	let delay = sec - 2;
	let name1;

	let numOfCards = 0;

	let boardLock = false;
	
	let imgName = ["chariot.png", "hangedman.png", "heirophant.png", "empress.png", "hermit.png", "highpriestess.png", "magician.png", "moon.png"];

	let img = randImages(imgName);
	
	let x = setInterval(function() {
		sec = sec - 1;
		//console.log(sec);
	}, 1000);
    
    // On Click, Cards Flip to Random Images
    $(".card").on("click", function(e){

// Changed card from Tarot Card Back to Random Images On Click
	   e.target.src = "Tarot Cards/" + img[e.target.id];

	   numOfCards++;

	   console.log(numOfCards);

	   if(numOfCards == 1){
	   	name1 = e.target.src;
	   }
	   $('#0').css("background-color", "rgba(2, 2, 2, 1)");

	   if(numOfCards == 2){
			if(name1 == e.target.src){
				console.log("match");
				//$('#0').css("display", "none");
			}else{
				console.log("didnt match");
			}
		numOfCards = 0;
	   }

	});

});
  

//	if(sec <= delay){

	// 		$('.card').attr("src", "tarotBack.png");

	// 	}


function randImages(arr){
	let img = new Array(16);
	let idx = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
	let j;
	
	for(let i = 0; i < 8; i++){
		
		j = Math.floor(Math.random()*idx.length);		
		img[idx[j]] = arr[i];
		idx.splice(j,1);
		
		j = Math.floor(Math.random()*idx.length);		
		img[idx[j]] = arr[i];
		idx.splice(j,1);
		
	}
    
    for (let i = 0; i < img.length; i++) {
        console.log(img[i]);
    }
	
	return img;
	
}






