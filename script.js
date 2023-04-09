const manu = document.querySelector('.manu')
const close = document.querySelector('.close')
const nav = document.querySelector('nav')

manu.addEventListener('click', () => {
    nav.classList.add('open-nav')
})
close.addEventListener('click', () => {
    nav.classList.remove('open-nav')
})