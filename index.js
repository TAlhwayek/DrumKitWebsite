// Score
var score = 0;

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

  // Waiting for a click
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    // Assigning a value to the clicked button
    var buttonInnerHTML = this.innerHTML;

    // Waiting for clicks to play sounds
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}



// Listening for keystrokes to play sounds
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

// Function that uses each letter to play a sound
// Switch statement for each individual letter
function makeSound(key) {

  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      score++;
      break;

    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      score++;
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      score++;
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      score++;
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      score++;
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      score++;
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      score++;
      break;


    // Default statement just to have something in here
    default:
      console.log(key + " is not a supported button.");

  }
  checkScore(score);
}

function checkScore(score) {
if (score > 50) {
  document.getElementById("score").style.fontSize = "x-large";
  document.getElementById("score").innerHTML = "KEEP ON ROCKING!";
  document.getElementById("score").style.color = "red";
}
}
// Adding animations for button presses
function buttonAnimation(currentKey) {
  var pressedButton = document.querySelector("." + currentKey)
  pressedButton.classList.add("pressed");
  setTimeout(function() {
  pressedButton.classList.remove("pressed");
}, 80);
}
