import queryString from 'query-string'
import axios from 'axios'

// const parsed = queryString.parse(window.location.search)
let notification = document.querySelector('.nav-bar__notification')
let submitButton = document.querySelector('.contact__submit-button')

submitButton.onclick = (e) => {
    e.preventDefault()
    axios.post("https://us-central1-jonathanearlio.cloudfunctions.net/contact-service/", {msg:'hello', email:'earl.jonathan@gmail.com', name:'fred durst'})
    .then(res => {
        console.log('res', res)
    })
    .catch(err => {
        console.log('err', err)
    })
}
// switch(parsed.success) {
//     case undefined: 
//         notification.innerHTML = null;
//         break;
//     case 'true': 
//         notification.innerHTML = 'Talk to you soon!'
//         notification.style.display = 'block'
//         break;
//     case 'false':
//         notification.innerHTML = 'Error, please try again in a moment'
//         notification.style.display = 'block'
//         break;
// }

notification.onclick = (e) => {
    e.preventDefault()

    notification.style.display = 'none'
}