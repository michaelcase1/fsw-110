var newNav = document.createElement("nav")
document.body.append(newNav)

var anchor1 = document.createElement("a")
anchor1.textContent = "home"
newNav.append(anchor1)

var anchor2 = document.createElement("a")
anchor2.textContent = "contact"
newNav.append(anchor2)

var anchor3 = document.createElement("a")
anchor3.textContent = "help"
newNav.append(anchor3)

var h1 = document.createElement("h1")
h1.textContent = "this is my H1"
document.body.append(h1)

var pTag = document.createElement("p")
pTag.textContent = "this is my paragraph"
document.body.append(pTag)

var list = document.createElement("ol")
document.body.append(list)

var line1 = document.createElement("li")
line1.textContent = "this is my first line"
list.append(line1)

var line2 = document.createElement("li")
line2.textContent = "this is my second line"
list.append(line2)

var line3 = document.createElement("li")
line3.textContent = "this is my third line"
list.append(line3)

var footer = document.createElement("footer")
footer.textContent = "this is my footer"
document.body.append(footer)