const init = () => {
  const inputs = document.querySelector('.input')
  const word = document.querySelector('.word')

  for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(65 + i)
    const button = document.createElement('button')
    button.textContent = letter
    button.addEventListener('click', handleLetterClick)
    inputs.appendChild(button)
  }
}
const handleLetterClick = () => {
  const button = event.target
  const letter = button.textContent
  button.disabled = true
  const letters = document.querySelectorAll('.word span')
}
document.addEventListener('DOMContentLoaded', init)
