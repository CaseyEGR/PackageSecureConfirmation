confirmationButton = document.getElementsByClassName("confirm_hyperlink")[0];
denyButton = document.getElementsByClassName("deny")[0];
confirmationButton.addEventListener("click", confirmClicked);
denyButton.addEventListener("click", denyClicked);

var socket = io('https://ancient-crag-62559.herokuapp.com/');

function confirmClicked(){
	socket.emit('confirm', { confirm: 'Package was confirmed' });
	console.log("Confirm button clicked")
}

function denyClicked(){
	socket.emit('deny', { denied: 'Package was not picked up by the user' });
	console.log("deny button clicked")
}