$(function() {
//initial values
	chosen = Math.floor((Math.random()*100)+1);
	counter = 1;
	responseOne = null;
	responseTwo = null;
	responseThree = null;
//array for feedback responses
response = ["That was your last guess. Are you even trying?", "You're getting colder.", "You're getting warmer!", "", "That's not a real guess. Try again."]
//logic for processing guess
var processing = function() {
	guess = parseInt($('#inputForm').val());
	$('#inputForm').val("");
	if (guess >= 1 && guess <= 100) {
		if(guess === chosen) {
			responseOne = "You nailed it! You got it on try " + counter +".";
			responseTwo = response[3];
			responseThree = response[3];
		}
		else {
			responseOne = "Not quite. You're on try " + counter + ".";
		}
		if (guess !== chosen) {
			responseTwo = "";
			responseThree = "Your last guess was " + guess + ".";
		}
		if (counter > 1 && guess > chosen) {
			if (guess === lastGuess) {
				responseTwo = response[0];
			}
			else if (guess > lastGuess) {
				responseTwo = response[1];
			}
			else {
				responseTwo = response[2];
			}
		}
		if (counter > 1 && guess < chosen) {
			if (guess === lastGuess) {
				responseTwo = response[0];
			}
			else if (guess < lastGuess) {
				responseTwo = response[1];
			}
			else {
				responseTwo = response[2];
			}
		}
	}
	else {
		responseOne = response[5];
		responseTwo = response[3];
		responseThree = response[3];
	}
//code to output response
$('.1').html(responseOne);
$('.2').html(responseTwo);
$('.3').html(responseThree);
//prepares for next guess
counter = counter + 1;
lastGuess = guess
};

//code to pull guess from page
$('#submitForm').on('click', function(e) {
	e.preventDefault();
	processing();
});
$('#inputForm').keydown(function(e) {
    if (e.keyCode == '13') {
        e.preventDefault();
        processing();
	};
});

});

