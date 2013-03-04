var buttonLeft = document.getElementById("left");

var buttonRight = document.getElementById("right");

var cont = document.getElementById("contslide");

var totalImages = cont.getElementsByTagName("img").length;

function changeContWidth(){
	cont.style.width = (640*totalImages)+"px" ;
	console.log();
}

function moveImages(){
	var contLeft = cont.offsetLeft;
	if (contLeft == ((-cont.offsetWidth) + 640)){}
	else{
		cont.style.left = (contLeft - 640)+"px";
	}
};

function moveImagesRight(){
	var contLeft = cont.offsetLeft;
	if(contLeft == 0){
	}
	else{
		cont.style.left = (contLeft + 640)+"px";
	}
};

changeContWidth();