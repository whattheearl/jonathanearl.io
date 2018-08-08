let navButton = document.querySelector('.nav-bar__menu-button')
navButton.onclick = e => {
    e.preventDefault()
    document.querySelector('.nav-bar__list').classList.toggle('hidden')
}