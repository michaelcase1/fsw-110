
for (var i = 0; i < 5; i++){
    var newH2 = document.createElement("h2")
    newH2.textContent = "h2 elements"
    newH2.style.color = "cornflowerblue"
    newH2.style.fontSize = "20px"
    newH2.style.fontWeight = "lighter"
    newH2.style.fontFamily = "sans-serif"
    document.body.append(newH2)
  }
  document.getElementsByClassName("newH2").classList.add(".title");