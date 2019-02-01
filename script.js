
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
	let nameId;

	let numOfCards = 0;

	let boardLock = false;
	
	let imgName = ["chariot.png", "hangedman.png", "heirophant.png", "empress.png", "hermit.png", "highpriestess.png", "magician.png", "moon.png"];

	let img = randImages(imgName);
    
    // Reset button resetting
    $(".resetButton").on("click", function(){
        img = randImages(imgName);
        $(".card").css("opacity", "1");
        $(".card").attr("src", "tarotBack.png");
    });

	let x = setInterval(function() {
		sec = sec - 1;
		//console.log(sec);
	}, 1000);
    
    // On Click, Cards Flip to Random Images
    $(".card").on("click", function(e){

// Changed card from Tarot Card Back to Random Images On Click
	if (boardLock) return;
	e.target.src = "Tarot Cards/" + img[e.target.id];

	   numOfCards++;

	   console.log(numOfCards);

	   if(numOfCards == 1){
		   name1 = e.target.src;
		   nameId = e.target.id;
	   }

	   if(numOfCards == 2){

		boardLock = true; 

		setTimeout(function() {
			if(name1 == e.target.src){
				console.log("match");
				$("#"+ nameId).css("opacity", "0");
				$("#" + e.target.id).css("opacity", "0");
				boardLock = false;
			}else{
				console.log("didnt match");
				$("#" + nameId).attr("src","tarotBack.png");
				$("#" + e.target.id).attr("src", "tarotBack.png");
				boardLock = false;
			}
		}, 1500);
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






