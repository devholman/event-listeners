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
var inputText = document.querySelector("#textInput")
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

var inputText3 = document.querySelector("#add-guest-bonus input")
var inputListUl3 = document.querySelector("#add-guest-bonus ul")

var redButtonWork = function(){
	this.parentNode.parentNode.removeChild(this.parentNode)
}

var enterInput = function(inputKey){
	inputText3 = inputKey.srcElement
	if(inputKey.keyCode === 13){
		var userInput = inputText3.value
		var newGuestItem = document.createElement('li')
		var redButton = document.createElement("button")
		redButton.textContent = 'x'
		newGuestItem.textContent = userInput
		inputListUl3.appendChild(newGuestItem)
		newGuestItem.appendChild(redButton)
		newGuestItem.classList.add('guest')
		inputText3.value = ''
		redButton.addEventListener('click',redButtonWork)
	}
}

 
inputText3.addEventListener('keydown',enterInput)
