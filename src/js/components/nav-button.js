let navButton = document.querySelector('.nav-bar__menu-button')
navButton.onclick = e => {
    e.preventDefault()
    e.stopPropagation()
    let navBarList = document.querySelector('.nav-bar__list')
    navBarList.classList.toggle('hidden')
    console.log('button', navBarList)
}

let navBarList = document.querySelector('.nav-bar__list')
navBarList.onclick = e => {
    e.stopPropagation();
    console.log('navBarList')
}

let navBarItem = document.querySelectorAll('.nav-bar__item > a')
navBarItem.forEach(item => {
    item.onclick = e => {
        e.stopPropagation()
        let navBarList = document.querySelector('.nav-bar__list')
        navBarList.classList.add('hidden')
        console.log('navBarItem', navBarList)
    }
})
    



document.body.onclick = e => {
    let navBarList = document.querySelector('.nav-bar__list')
    if(!navBarList.classList.contains('hidden')) {
        navBarList.classList.add('hidden')
    }
    console.log('body', navBarList)
}