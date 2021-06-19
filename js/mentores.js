var btn_men = document.getElementById("mentor")
var mentor = document.getElementById("mentores")
var empre = document.getElementById("empresas")

btn_men.addEventListener("click", (e) => {
    e.preventDefault()
    mentor.style.visibility="visible"
    mentor.style.opacity="1"
    mentor.style.display="block"
})