document.addEventListener(
  "DOMContentLoaded", 
  () => {
    const lightswitch = document.querySelector(".switch")
    const body = document.querySelector("body")
    const status = document.querySelector(".status")

    lightswitch.onclick = () => {
      if (lightswitch.className === "switch on") {
        lightswitch.className = "switch off"
        body.className = "dark"
        status.innerText = "Who turned out the lights?"
        status.className = "status dark"
      } else {
        lightswitch.className = "switch on"
        body.className = "light"
        status.innerText = "It's so bright in here!"
        status.className = "status light"
      }
    }
  }
)
