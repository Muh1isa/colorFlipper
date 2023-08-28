let button = document.querySelector('.btn')
let color = document.querySelector('.color')
let colors = ['cadetblue', 'chartreuse', 'grey', 'teal', '#f1f1f1', '#a52a2a']

button.addEventListener('click', () => {
    // document.body.style.backgroundColor = 'teal'
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]

})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}