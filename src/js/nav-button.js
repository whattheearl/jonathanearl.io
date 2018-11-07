/*
    Handle mobile navigation menu events
*/

// display mobile nav
let navButton = document.querySelector('.nav-bar__menu-button')
navButton.onclick = e => {
    e.preventDefault()
    e.stopPropagation()
    let navBarList = document.querySelector('.nav-bar__list')
    navBarList.classList.toggle('hidden')
}

// stop click through
let navBarList = document.querySelector('.nav-bar__list')
navBarList.onclick = e => {
    e.stopPropagation();
}

// hide navigation after selection
let navBarItem = document.querySelectorAll('.nav-bar__item > a')
navBarItem.forEach(item => {
    item.onclick = e => {
        e.stopPropagation()
        let navBarList = document.querySelector('.nav-bar__list')
        navBarList.classList.add('hidden')
    }
})
    
// hide menu if clicked off the menu
document.body.onclick = e => {
    let navBarList = document.querySelector('.nav-bar__list')
    if(!navBarList.classList.contains('hidden')) {
        navBarList.classList.add('hidden')
    }
}