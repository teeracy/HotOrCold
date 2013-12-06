$(function() {
	chosen = Math.floor((Math.random()*100)+1);
	counter = 1;
	responseOne = null;
	responseTwo = null;
	responseThree = null;
//arrays for responses
correct = [1, 2, 3, 4];
incorrect = [1, 2, 3, 4];
hot = ["It's too hot!", "You're not even trying! That was your last guess!", "You're making the soup even hotter! TRY AGAIN!", "You're getting closer to being just right! Keep going. HURRY!"];
cold = ["It's too cold!", "You're not even trying! That was your last guess!", "You're making the soup even colder! TRY AGAIN!", "You're getting closer to being just right! Keep going. HURRY!"];
//code to pull guess from page
$('#submitForm').on('click', function(e) {
	e.preventDefault();
	guess = $('#inputForm').val();
//logic for processing guess
	if (guess >= 1 && guess <= 100) {
		if(guess === chosen) {
			if (counter === 1) {
				responseOne = correct[0];
				counter = 0;
			}
			else if (counter > 1 && counter <= 3) {
				responseOne = correct[1];
				counter = 0;
			}
			else if (counter > 3 && counter <= 5) {
				responseOne = correct[2];
				counter = 0;
			}
			else if (counter > 5 && counter <= 7) {
				responseOne = correct[3];
				counter = 0;
			}
			else {
				responseOne = correct[4];
				counter = 0;
			}
		}
		else {
			if (counter === 1) {
				responseOne = incorrect[0];
			}
			else if (counter > 1 && counter <= 3) {
				responseOne = incorrect[1];
			}
			else if (counter > 3 && counter <= 5) {
				responseOne = incorrect[2];
			}
			else if (counter > 5 && counter <= 7) {
				responseOne = incorrect[3];
			}
			else {responseOne = incorrect[4];};
		}
		if (counter > 1 && guess > chosen) {
			responseTwo = hot[1];
			if (guess === lastGuess) {
				responseThree = hot[2];
			}
			else if (guess > lastGuess) {
				responseThree = hot[3];
			}
			else {
				responseThree = hot[4];
			}
		}
		if (counter > 1 && guess < chosen) {
			responseTwo = cold[1];
			if (guess === lastGuess) {
				responseThree = cold[2];
			}
			else if (guess > lastGuess) {
				responseThree = cold[3];
			}
			else {
				responseThree = cold[4];
			}
		}
	}
	else {
		responseOne = "That's not a real guess. You're going to starve the pandas to death if you keep doing that."
	}
if (counter != 0) {
	counter = counter + 1;
lastGuess = guess
}
$('.initialResponse').hide();
//code to output response
console.log(responseOne);
console.log(responseTwo);
console.log(responseThree);
console.log(counter);
console.log(guess);
console.log(chosen);
$('.initialResponse').append($('<div class="response">' + responseThree + '</div>'));
$('.initialResponse').append($('<div class="response">' + responseTwo + '</div>'));
$('.initialResponse').append($('<div class="response">' + responseOne + '</div>'));

});
});

