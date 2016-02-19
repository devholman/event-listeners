// GO!

var controlButton = document.querySelector("#hide-nav-button")
var navMenu = document.querySelector(".nav-menu")


var menuState = {
	showing: true
}

var menuToggle = function(){
	if(menuState.showing){
		navMenu.style.opacity=0
		menuState.showing = false
		controlButton.textContent = "show nav"


	}else{
		navMenu.style.opacity=1
		menuState.showing = true
		controlButton.textContent = "hide nav"
	}
}

controlButton.addEventListener("click", menuToggle)

//Task #2
var inputText = document.querySelector("input[type='text']")
var inputListUl = document.querySelector(".guest-list")

var enterInput = function(inputKey){
	inputText = inputKey.srcElement
	if(inputKey.keyCode === 13){
		var userInput = inputText.value
		var newGuestItem = document.createElement('li')
		newGuestItem.textContent = userInput
		inputListUl.appendChild(newGuestItem)
		newGuestItem.classList.add('guest')
		inputText.value = ''
	}
}
inputText.addEventListener('keydown',enterInput)

// Task #3

var inputText = document.querySelector("input[type='text']")
var ulList = document.querySelector(".guest-list")

var enterList = function(inputKey){
	

}
