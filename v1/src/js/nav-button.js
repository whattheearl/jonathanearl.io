/*
    Handle mobile navigation menu events
*/

// Close navigation on click of link
let navBarItem = document.querySelectorAll('.menu__link');
let checkBox = document.querySelector('#checkbox');
navBarItem.forEach(item => {
    item.onclick = e => {
        e.stopPropagation();
        checkBox.checked = false;
    }
})