//create secretNumber
var secretNumber = 4;

//ask user to guess;
var guess = prompt("Guess a number");

//check if guess is right

if(Number(guess)===secretNumber){
  alert("YOU GOT IT RIGHT");
}
else if(Number(guess)>secretNumber){
  alert("Too high. Guess again!");
}

else{
  alert("Too low. Guess again!");
}

//otherwise, check if lower
