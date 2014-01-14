$(function() {
//initial values
	chosen = Math.floor((Math.random()*100)+1);
	counter = 1;
	responseCounter = null;
	responseTwo = null;
	responseThree = null;
//array for feedback responses
response = ["That was your last guess. Are you even trying?", "Closer than your last guess!", "Your last guess was closer.", "", "That's not a real guess. Try again.", "You're too hot.", "You're too cold."]
//logic for processing guess
var processing = function() {
	guess = parseInt($('#inputForm').val());
	$('#inputForm').val("");
	if (guess >= 1 && guess <= 100) {
		if (counter === 1) {
			$('#guesses').html('<span id="lastGuess">Previous guesses: </span>');
		}
		if (guess === lastGuess) {
				responseTwo = response[0];
		}
		if (guess > chosen) {
			responseTwo = response[5];
		}
		if (guess < chosen) {
			responseTwo = response[6];
		}
		if (counter > 1 && (Math.abs(chosen-guess) < Math.abs(chosen-lastGuess))) {
			responseThree = response[1];
		}
		if (counter > 1 && (Math.abs(chosen-guess) > Math.abs(chosen-lastGuess))) {
			responseThree = response[2];
		}
		if(guess === chosen) {
			responseCounter = "<b>You nailed it! You got it on try " + counter +".</b>";
			responseTwo = response[3];
			responseThree = response[3];
		}
		else {
			responseCounter = "Not quite. You're on try " + counter + ".";
		}
	//prepares for next guess
	counter = counter + 1;
	lastGuess = guess
	}
	//invalid guess
	else {
		responseCounter = response[4];
		responseTwo = response[3];
		responseThree = response[3];
	}
//code to output response
$('#counter').html(responseCounter);
$('#feedback1').html(responseTwo);
$('#feedback2').html(responseThree);
$('#lastGuess').append("   " + guess + "   ");
};
//code to pull guess from page as a click on submit or enter keypress
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

