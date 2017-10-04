document.addEventListener("DOMContentLoaded", () => {
  
  const modal = document.querySelector(".modal")
  const signin = document.querySelector(".signin")
  const close = document.querySelector(".close")
  const submit = document.querySelector(".submit")
  const inputs = document.querySelectorAll("input")
  const form = document.querySelector(".getstarted")


  // i thought it would be fun to do this with only Javascript. There are better solutions if you also change the CSS.
  
  signin.onclick = () => {

    if (signin.disabled) return 
    signin.disabled = true
    modal.style.display = "block"
    modal.style.opacity = 0
    modal.style.transition = "opacity 0.3s"
    modal.style.transitionTimingFunction = "ease-out"
    setTimeout(function() {
      modal.style.opacity = 1
    }, 100);
  }

  const closeModal = () => {
    modal.style.opacity = 0
    setTimeout(function () {
      modal.style.display = "none"
    }, 400);
    signin.disabled = false
  }

  document.onkeyup = e => {
    console.log(e);
    
      if (e.key === "Escape") {
        closeModal()
        // e.preventDefault();
      } 
  }
  

  close.onclick = closeModal
  modal.onclick = closeModal

  submit.onclick = (e) => {
    inputs.forEach(
      (eachInput) => {eachInput.classList = "error"}
    )
  }

  inputs.forEach(
    (eachInput) => {
      eachInput.onclick = () => {
        if (eachInput.className === "error") {
          eachInput.className = ""
        }
      }
    }
  )

  form.onclick = (e) => {e.stopPropagation()}


});