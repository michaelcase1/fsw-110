
//CREATE
//ADD TEXT
//GET ELEMENT
//APPEND
var newLi = document.createElement("li")
newLi.textContent = "two"
var myList = document.getElementById("my-list")
myList.append(newLi)

var newLi2 = document.createElement("li")
newLi2.textContent = "three"
myList.append(newLi2)

var newLi3 = document.createElement("li")
newLi3.textContent = "four"
myList.append(newLi3)

var newH1 = document.createElement("h1")
newH1.textContent = "this is my h1"
document.body.append(newH1)

var newP = document.createElement("p")
newP.textContent = "this is my paragraph. all of this was created with Javascript"
document.body.append(newP)


















