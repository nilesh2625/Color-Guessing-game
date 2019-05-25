var numSquares = 6,
    colors = generateRandColor(numSquares),
    squares = document.querySelectorAll(".square"),
    pickedColor = pickColor(),
    displayColor = document.getElementById("displayedColor"),
    messageDisplay= document.getElementById("message"),
    h1 = document.querySelector("h1"),
    change = document.querySelector("#changeColor"),
    easyBtn = document.querySelector("#easyBtn"),
    hardBtn = document.querySelector("#hardBtn");

displayColor.textContent = pickedColor;
easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandColor(numSquares);
	pickedColor = pickColor();
	displayColor.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";	
		}
	}

});	

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandColor(numSquares);
	pickedColor = pickColor();
	displayColor.textContent = pickedColor;
	for(var i = 0; i < squares.length ; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

change.addEventListener("click", function(){
	colors = generateRandColor(numSquares);
	pickedColor = pickColor();
	change.textContent = "New Colors";
	message.textContent = "" ;
	displayColor.textContent = pickedColor;
	
	for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";

});

displayColor.textContent = pickedColor;


for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var bgcolor = "#232323";
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent =  "Correct";
			changeColors(clickedColor);
			h1.style.backgroundColor = pickedColor;
			changeColor.textContent="Play Again";
 		} else{
			this.style.backgroundColor = bgcolor;
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color){
	for( var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color; 
	}
}

function pickColor(){
	var randomColor = Math.floor(Math.random() * colors.length);
	return (colors[randomColor]);
}

function generateRandColor(num){
	var arr = [];
	for( var i =0; i < num ; i++){
		arr.push(randColor());
	}

	return arr;
}

function randColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return  "rgb(" + r +", "+ g +", " + b + ")";
}

