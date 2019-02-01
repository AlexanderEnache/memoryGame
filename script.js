
"use strict";

$(document).ready(function () {

    $(".startButton").on("click", function () {

        let sec = 60;
        let min = 0;
        let delay = sec - 2;
        let name1;
        let nameId;
        let score = 0;

        let numOfCards = 0;

        let boardLock = false;

        let imgName = ["chariot.png", "hangedman.png", "heirophant.png", "empress.png", "hermit.png", "highpriestess.png", "magician.png", "moon.png"];

        let img = randImages(imgName);

        // Reset button resetting
        $(".resetButton").on("click", function () {
            score = 0;
            img = randImages(imgName);
            $(".card").css("opacity", "1");
            $(".card").attr("src", "tarotBack.png");
            sec = 60;
            boardLock = false;

            $(".death").css("opacity", "1");
            $('.deathMessage').css("display", "none");
            $('.deathMessage').css("color", "white");

            $(".life").css("opacity", "1");
            $('.lifeMessage').css("display", "none");
            $('.lifeMessage').css("color", "white");

        });

                                                                        /// finish reset button
        let x = setInterval(function () {
            sec = sec - 1;
            $(".Timer").html(sec);
            if (sec <= 0) {
                sec = 1;
                boardLock = true;
                $(".death").css("opacity", "0.2");
                // $(".death").attr("src", "tarotBack.png");
                $('.deathMessage').css("display", "block");
                $('.deathMessage').css("color", "white");

            }
            //console.log(sec);
        }, 1000);

        // On Click, Cards Flip to Random Images
        $(".card").on("click", function (e) {

            // Changed card from Tarot Card Back to Random Images On Click
            if (boardLock) return;
            e.target.src = "Tarot Cards/" + img[e.target.id];

            numOfCards++;

            console.log(numOfCards);

            if (numOfCards == 1) {
                name1 = e.target.src;
                nameId = e.target.id;
            }

            if (numOfCards == 2) {

                boardLock = true;

                setTimeout(function () {
                    if (name1 == e.target.src) {
                        console.log("match");
                        $("#" + nameId).css("opacity", "0");
                        $("#" + e.target.id).css("opacity", "0");
                        boardLock = false;

                        score++;

                        if(score == 8){
                            
                            $(".life").css("opacity", "0.2");
                            // $(".death").attr("src", "tarotBack.png");
                            $('.lifeMessage').css("display", "block");
                            $('.lifeMessage').css("color", "white");

                        }

                    } else {
                        console.log("didnt match");
                        $("#" + nameId).attr("src", "tarotBack.png");
                        $("#" + e.target.id).attr("src", "tarotBack.png");
                        boardLock = false;
                    }
                }, 1500);
                numOfCards = 0;
            }

        });
    });
});


//	if(sec <= delay){

// 		$('.card').attr("src", "tarotBack.png");

// 	}


function randImages(arr) {
    let img = new Array(16);
    let idx = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    let j;

    for (let i = 0; i < 8; i++) {

        j = Math.floor(Math.random() * idx.length);
        img[idx[j]] = arr[i];
        idx.splice(j, 1);

        j = Math.floor(Math.random() * idx.length);
        img[idx[j]] = arr[i];
        idx.splice(j, 1);

    }

    for (let i = 0; i < img.length; i++) {
        console.log(img[i]);
    }

    return img;

}






