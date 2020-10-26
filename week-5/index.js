const form = document.form

var button = document.getElementById("button")
var state = document.getElementsByTagName("State")
console.log(state)

form.addEventListener("submit", (event) => {
    event.preventDefault()
    
console.log(form.gender.value)
    
 console.log(form.entertainment.value)
})

const checkedInputs = []
    
    for(let i = 0; i < form.dietaryRestrictions.length; i++){
        if(form.dietaryRestrictions[i].checked){
            checkedInputs.push(form.dietaryRestrictions[i].value)
        }
    }
    console.log(checkedInputs)
    function test(){
        alert(location.value4)
    }

  alert(location)
 
button.addEventListener("click", test)
