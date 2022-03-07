
async function handlePetSubmit(e) {
    e.preventDefault()

    var petName = document.getElementById("petName").value

    var breedType = document.getElementById("breedType").value

    var isMale = document.getElementById("maleInput").checked
    var gender = ""
    if (isMale) {
        gender = "male"
    } else { gender = "female" }

    var allergies = document.getElementById("allergies").checked

    var aggressive = document.getElementById("aggressive").checked

    var grooming = document.getElementById("grooming").checked
    
  




    var body = { petName,grooming,aggressive,allergies,gender,breedType }
    console.log(body)
    const res =await callApi("http://localhost:3000/api/forum/","POST",body)
    console.log(res)
}

window.addEventListener("DOMContentLoaded", function () {



    var petForm = document.getElementById("pet-form")
    petForm.addEventListener("submit", handlePetSubmit)
})