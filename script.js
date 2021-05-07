document.getElementById('btn').addEventListener('click', startGame)
let guess = null
let exit = false

function startGame () {
  exit = false
  const myAge = Math.ceil(Math.random() * 20)
  while (guess !== myAge && !exit) {
    guess = parseInt(prompt('Try to guess my age. Type `quit` to quit the game.'))
    if (guess * 0 === 0) {
      if (guess !== myAge) {
        if (guess < myAge) {
         alert('Your guess is less than my age! Try again.')
        }
        if (guess > myAge) {
          alert('Your guess is bigger than my age! Try again.')
        }
      }
      if (guess === myAge) {
        alert('You got it right! Congratulations.')
        exit = true
      }
    } else if (guess === 'quit') {
      exit = true
    } else {
      alert('That`s not a number, silly! Let`s try again.')
    }
  }
}
