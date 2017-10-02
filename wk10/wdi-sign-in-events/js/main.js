document.addEventListener("DOMContentLoaded", () => {
  
  const modal = document.querySelector(".modal")
  const signin = document.querySelector(".signin")
  const close = document.querySelector(".close")
  const submit = document.querySelector(".submit")
  const inputs = document.querySelectorAll("input")

  signin.onclick = () => {
    modal.style.display = "block"
    modal.style.opacity = 0
    modal.style.transition = "opacity 0.3s"
    modal.style.transitionTimingFunction = "ease-out"
    setTimeout(function() {
      modal.style.opacity = 1
    }, 100);
  }

  modal.onclick = () => {
    modal.style.opacity = 0
    setTimeout(function () {
      modal.style.display = "none"
    }, 400);
  }

  submit.onclick = (e) => {
    e.stopPropagation()
    inputs.forEach(
      (eachInput) => {eachInput.classList += "error"}
    )
  }

  inputs.forEach(
    (eachInput) => {
      eachInput.onclick = (e) => {
        e.stopPropagation()
        if (eachInput.className === "error") {
          eachInput.className = ""
        }
      }
    }
  )



});