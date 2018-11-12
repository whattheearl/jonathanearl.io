/*
    Handle mobile navigation menu events
*/

// display mobile nav
// let navButton = document.querySelector('.nav-bar__menu-button');
// navButton.onclick = e => {
//     e.preventDefault();
//     e.stopPropagation();
//     let navBarList = document.querySelector('.nav-bar__list');
//     navBarList.classList.toggle('hidden');
// }

// // stop click through
// let navBarList = document.querySelector('.nav-bar__list');
// navBarList.onclick = e => {
//     e.stopPropagation();
// }

// hide navigation after selection
let navBarItem = document.querySelectorAll('.menu__link');
let checkBox = document.querySelector('#checkbox');
navBarItem.forEach(item => {
    item.onclick = e => {
        e.stopPropagation();
        checkBox.checked = false;
    }
})
    
// // hide menu if clicked off the menu
// document.body.onclick = e => {
//     let navBarList = document.querySelector('.nav-bar__list');
//     if(!navBarList.classList.contains('hidden')) {
//         navBarList.classList.add('hidden');
//     }
// }