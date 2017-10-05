document.addEventListener("DOMContentLoaded", function() {

  const list = document.querySelector('#list')
  const form = document.querySelector('#form')

  const getVotes = () => {fetch("https://bb-election-api.herokuapp.com/")
    .then(response => response.json())
    .then(respJSON => {
      list.innerHTML = ""
      respJSON.candidates.forEach(eachCandidate => {
        list.innerHTML += `<li> Name: ${eachCandidate.name}; Votes: ${eachCandidate.votes} </li>`   
      })
    })
  }

  const getForm = () => {
    fetch("https://bb-election-api.herokuapp.com/")
    .then(response => response.json())
    .then(respJSON => {
      respJSON.candidates.forEach(eachCandidate => {
        form.innerHTML += `
        <input type="radio" class="votes" name="candidate" value="${eachCandidate.name}" id="${eachCandidate.name}">
        <label for=${eachCandidate.name}>${eachCandidate.name}</label></br >
        `
      })
      form.innerHTML += `<button id="submit" type="submit">Vote!</button>`
    })
  }

  const voteFor = (candidate) => {
    fetch(`https://bb-election-api.herokuapp.com/vote?name=${candidate}`, {
      method: "POST"
    })
  }
  
  getForm()
  getVotes()


  form.onsubmit = (e) => {
    e.preventDefault()
    let vote
    document.querySelectorAll('.votes').forEach((each) => {
      if (each.checked) vote = each.value
    })

    if (vote) {
      document.querySelector('#submit').disabled = "true"

      voteFor(vote)
      getVotes()
    }
  }

});