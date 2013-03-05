var cont = document.getElementById("contslide");
var totalImages = cont.getElementsByTagName("img").length;
var elemWidth = 640;

function createButton(){
	var button = document.createElement("a");
	button.setAttribute("href", "#");
	button.setAttribute("alt", "Go to image "+i)
	button.innerHTML = "Image "+i ;
	document.getElementById("controls").appendChild(button);
}

for (var i = 1; i <= totalImages; i++){	
	createButton();	
}

function buttonEvents(){
	var buttonLeft = document.getElementById("left");
	var buttonRight = document.getElementById("right");
	buttonLeft.onclick = moveImages;
	buttonRight.onclick = moveImagesRight;
}

function changeContWidth(){
	cont.style.width = (elemWidth*totalImages)+"px" ;
	console.log();
}

function moveImages(){
	var contLeft = cont.offsetLeft;
	if (contLeft == 0){}
	else{
		cont.style.left = (contLeft + elemWidth)+"px";
	}
};

function moveImagesRight(){
	var contLeft = cont.offsetLeft;
	if(contLeft == ((-cont.offsetWidth) + elemWidth)){
	}
	else{
		cont.style.left = (contLeft - elemWidth)+"px";
	}
};

window.onload = function(){
	buttonEvents();
	changeContWidth();
}