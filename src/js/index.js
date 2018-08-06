// Show hide mobile nav
const queryString = require('query-string');

let navButton = document.querySelector('.nav-bar__menu-button')
navButton.onclick = e => {
    e.preventDefault()
    document.querySelector('.nav-bar__list').classList.toggle('hidden')
}

const parsed = queryString.parse(window.location.search)
console.log(parsed)


// function getValue(selector) {
//     return document.querySelector(selector).value
// }

// let form = document.querySelector('.contact__form')
// form.addEventListener('submit', function(e){
//     e.preventDefault()
//     let payload = JSON.stringify({
//         name: getValue('.contact__name'),
//         email: getValue('.contact__email'),
//         msg: getValue('.contact__msg')
//     })
//     console.log(payload)

//     let formData = new FormData()
//     formData.append('json', payload)
    
//     let fetchOptions = { 
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         method: 'POST',
//         body: formData
//     }

//     fetch('https://us-central1-jonathanearlio.cloudfunctions.net/contact-service/', fetchOptions)
//     .then(res => {
//         console.log(res)
//         res.json()
//         .then(data => {
//             console.log(data)
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     })
//     .catch(err => {
//         console.log('fetch err', err)
//     })
// })