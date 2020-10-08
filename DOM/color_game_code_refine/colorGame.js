
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();
function init(){
  // modeButtons event listeners;
  setupModeButtons();
  setupSquares();
  reset();

}
function setupModeButtons(){
  for(var i=0; i<modeButtons.length; i++){
    modeButtons[i].addEventListener("click",function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      if(this.textContent === "Easy"){
        numSquares = 3;
      }else{
        numSquares = 6;
      }
      // alternative code: this.textContent === "Easy" ? numSquares = 3: numSquares=6;

      reset();
      // figure out how many squares to show;
      // pick new colors;
      // pick a new pickedColor;
      // update page to reflect changes;
    });
  }
}
function setupSquares(){
  for(var i = 0; i < squares.length; i++){

    // add click listeners to squares
    squares[i].addEventListener("click", function(){
      // grab rgb color of the clicked square;
      var clickedColor = this.style.backgroundColor;
      // compare this square color to picked color;
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        resetButton.textContent = "Play again?"
        h1.style.backgroundColor = clickedColor;
      }else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}


function reset(){
  colors = generateRandomColors(numSquares);
  // pick a new random color from array;
  pickedColor = pickColor();
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";
  // change colorDisplay to match the picked color;
  colorDisplay.textContent = pickedColor;
  // change colors of squares;use for loop as before to loop through all squares.
  for(var i=0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    }else{
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor="steelblue";
}
// easyBtn.addEventListener("click",function(){
//   hardBtn.classList.remove("selected");
//   easyBtn.classList.add("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++){
//     if(colors[i]){
//       squares[i].style.background = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
// });
//
// hardBtn.addEventListener("click",function(){
//   hardBtn.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++){
//       squares[i].style.background = colors[i];
//       squares[i].style.display = "block";
//   }
// });


resetButton.addEventListener("click", function(){
  reset();

})


function changeColors(color){
  // loop through each square;
  for(var i=0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
   // to match the correct color;
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  // generate an array;
  var arr=[];
  // add num random colors to this array-(repeat num times-each time is select a random colors);
  for(i = 0; i < num; i++){
    // select random color;-here make a separate function called randomColor;
    arr.push(randomColor());
  }
  // return that array in the end;
  return arr;

}

function randomColor(){
  // pick a red from 0-255;
  var r = Math.floor(Math.random() * 256);
  // pick a green from 0-255;
  var g = Math.floor(Math.random() * 256);
  // pick a blue from 0-255;
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", "+ g + ", " + b + ")";
}
