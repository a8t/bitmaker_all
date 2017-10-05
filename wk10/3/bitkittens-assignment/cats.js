document.addEventListener('DOMContentLoaded', function() {
  const summonCats = document.querySelector('.summon-cats')
  const catboxes = document.querySelectorAll('.cat-box')

  summonCats.onclick = e => {
    e.preventDefault()
    fetch("http://bitkittens.herokuapp.com/cats.json")
    .then(resp => resp.json())
    .then(respJSON => {
      for (let i = 0; i < catboxes.length ; i++) {
        catboxes[i].innerHTML = `<img src=${respJSON.cats[i].photo} alt="Photo of ${respJSON.cats[i].name}">`
      }
    })
  }
})

