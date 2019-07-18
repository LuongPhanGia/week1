let randNumber = Math.floor(Math.random() * (10 - 1) ) + 1;
let pastResult = "";
let count = 10;
let button = document.getElementById('guessButton');
button.addEventListener('click', function() {
  let userGuess = document.getElementById('number').value;
  
  if(userGuess == ""){
    document.getElementById('message').innerHTML = "Your input was null";
    document.getElementById('message').style.backgroundColor = "Yellow";
  }
  else{
    count--;
    if (userGuess < randNumber) {
      document.getElementById('message').innerHTML = "Sorry your guess was too low, guess higher. You have " + count + " guesses left";
      document.getElementById('message').style.backgroundColor = "red";
    }
    else if (userGuess > randNumber) {
      document.getElementById('message').innerHTML = "Sorry your guess was too high, guess lower. You have " + count + " guesses left";
      document.getElementById('message').style.backgroundColor = "red";
    }
    else {
      document.getElementById('message').innerHTML = "Yay YOU ARE THE LORD OF THE GUESS";
      document.getElementById('message').style.backgroundColor = "green";
    }

    pastResult += userGuess + "<br>";
    document.getElementById('past').innerHTML = pastResult;

    if (count == 0) {
      document.getElementById('message').innerHTML = "YOU LOSE";
      location.reload();
    }
  }
  //document.getElementById('count').innerHTML = count + " ";
  document.getElementById('number').value = "";
});