// Show hide mobile nav
let navButton = document.querySelector('.nav-bar__menu-button')
navButton.onclick = e => {
    e.preventDefault()
    document.querySelector('.nav-bar__list').classList.toggle('hidden')
}

// let body = document.querySelector('body')
// body.onclick = e => {
//     e.preventDefault()
//     console.log('click body')
//     let nav = document.querySelector('.nav-bar__list')
//     if(nav.classList.contains('hidden')) {
//         nav.classList.remove('hidden')
//     }
// }