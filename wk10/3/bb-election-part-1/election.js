document.addEventListener("DOMContentLoaded", function() {

  const list = document.querySelector('#list')

  fetch("https://bb-election-api.herokuapp.com/")
    .then(response => response.json())
    .then(respJSON => {
      respJSON.candidates.forEach(eachCandidate => {
        list.innerHTML += `
          <li> Name: ${eachCandidate.name}; Votes: ${eachCandidate.votes} </li>
        `
      })
    })

});
