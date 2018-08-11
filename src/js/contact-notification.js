import axios from 'axios'

let getInputValue = selector => {
    return document.querySelector(selector).value
}

let clearInputValue = (selector) => {
    document.querySelector(selector).value = ""
}

let form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let notification = document.querySelector('.nav-bar__notification')

    let formData = {
        name: getInputValue('.contact__name'),
        email: getInputValue('.contact__email'),
        msg: getInputValue('.contact__msg')
    }

    axios.post("https://us-central1-jonathanearlio.cloudfunctions.net/contact-service/", formData)
    .then(res => {
        notification.innerHTML = res.data.msg
        notification.style.display = 'flex'
        clearInputValue('.contact__name')
        clearInputValue('.contact__email')
        clearInputValue('.contact__msg')
    })
    .catch(err => {
        let msg = ''
        if(err.data.msg !== undefined) {
            msg = err.data.msg
        } else { 
            msg = 'Something went wrong! Please try again later...'
        }
        notification.innerHTML = msg
        notification.style.display = 'flex'
    })
})

// switch(parsed.success) {
//     case undefined: 
//         notification.innerHTML = null;
//         break;
//     case 'true': 
//         notification.style.display = 'block'
//         break;
//     case 'false':
//         notification.innerHTML = 'Error, please try again in a moment'
//         notification.style.display = 'block'
//         break;
// }
let notification = document.querySelector('.nav-bar__notification')
notification.onclick = (e) => {
    e.preventDefault()

    notification.style.display = 'none'
}