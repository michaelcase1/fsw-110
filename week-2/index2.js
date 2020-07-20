


var newNav = document.createElement("nav")
document.body.append(newNav)

//newNav.append(newP)

var anchor1 = document.createElement("a")
anchor1.textContent = "home"
newNav.append(anchor1)

var anchor2 = document.createElement("a")
anchor2.textContent = "contact"
newNav.append(anchor2)


var anchor3 = document.createElement("a")
anchor3.textContent = "help"
newNav.append(anchor3)

var newP = document.createElement("p")
newP.textContent = "All this was created with javascript"
document.body.append(newP)



var orderList = document.createElement("ol")
document.body.append(orderList)

var firstLine = document.createElement("li")
firstLine.textContent = "ONE"
orderList.append(firstLine)

var secondLine = document.createElement("li")
secondLine.textContent = "two"
orderList.append(secondLine)


var thirdLine = document.createElement("li")
thirdLine.textContent = "three"
orderList.append(thirdLine)

var newH1 = document.createElement("h1")
newH1.textContent = "heres my h1"
document.body.append(newH1)

var footer = document.createElement("footer")
footer.textContent = "heres my footer"
document.body.append(footer)


