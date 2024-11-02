const leftButton = document.querySelector('.left')
const rightButton = document.querySelector('.right')
const slider = document.querySelector('.slider')
let img = document.createElement('img')
const imagens = [1, 2, 3, 4]
let current = 0

leftButton.onclick = e => {
    current--
    e.preventDefault()
    if (current == 0) {
        current = 4
    }
    slider.innerHTML = imagens[current-1]
}

rightButton.onclick = e => {
    e.preventDefault()
    if (current >= 4) {
        current = 0
    }
    current++
    slider.innerHTML = imagens[current-1]
}