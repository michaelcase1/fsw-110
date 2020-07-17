var newH1 = document.createElement("h1")
newH1.textContent = "Welcome to my JS site"
document.body.append(newH1)





var newLi = document.createElement("li")
newLi.textContent = "two"
var myList = document.getElementById("my-list")
myList.append(newLi)

var newLi = document.createElement("li")
newLi.textContent = "three"
var myList = document.getElementById("my-list")
myList.append(newLi)

var newLi = document.createElement("li")
newLi.textContent = "four"
var myList = document.getElementById("my-list")
myList.append(newLi)


var newP = document.createElement("p")
newP.textContent = "All this was created with javascript"
document.body.append(newP)