document.addEventListener("DOMContentLoaded", function (event) {
  
  let currentState = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
  ]


  const win = document.querySelector("#win")
  const game = document.querySelector("#game")
  const reset = document.querySelector("#reset")

  let currentPlayer = "x"

  game.onclick = (e) => {
    if (checkHasState(e)) {
      currentState[e.target.id] = currentPlayer
      e.target.innerText = currentPlayer      
      if (isCurrentAWinningState()) { 
        win.innerText = currentPlayer + " wins!" 
        win.style.visibility = "visible"
      }
      currentPlayer = currentPlayer === "x" ? "o" : "x"
    }    
  } 

  const winningState = (a, b, c) => currentState[a] === currentPlayer && currentState[b] === currentPlayer && currentState[c] === currentPlayer
  const isCurrentAWinningState = () => winningState(0, 1, 2) || winningState(3, 4, 5) || winningState(6, 7, 8) || winningState(0, 3, 6) || winningState(1, 4, 7) || winningState(2, 5, 8) || winningState(0, 4, 8) || winningState(2, 4, 6) 

  const checkHasState = e => e.target.innerHTML === ""
  const convertedCurrentState = (currentState) => currentState.map(
    eachElement => eachElement === currentPlayer ? currentPlayer : 0
  )

  const checkWinner = (convertedCurrentState) => winningStates.indexOf(currentState) > -1

  reset.onclick = (e) => {
    e.preventDefault()
    currentState = [
      0, 0, 0,
      0, 0, 0,
      0, 0, 0
    ]
    currentPlayer = "x"
    document.querySelectorAll("td").forEach(
      eachTD => eachTD.innerHTML = ""
    )
    win.innerText = ""
    win.style.visibility = "hidden"
  }

});