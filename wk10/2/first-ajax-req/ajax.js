document.addEventListener("DOMContentLoaded", function() {

  const step12 = document.querySelector("#step12")
  const button12 = document.querySelector("#button12")
  const step3456 = document.querySelector("#step3456")
  const button3456 = document.querySelector("#button3456")

  button12.onclick = () => {
    fetch("http://first-ajax-api.herokuapp.com/")
  }

  button3456.onclick = () => {
    fetch("http://first-ajax-api.herokuapp.com/pong")
      .then(response => response.text())
      .then(responseText => {
          console.log(responseText)
          step3456.innerHTML += responseText
      }).catch(e => { 
        step3456.innerHTML += e 
      }).always(() => {
        console.log("Hey, it finished!");
      })
  }

});
