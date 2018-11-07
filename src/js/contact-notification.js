/*
    Handle contact-form submission
    Handle notification-bar msg and hide
*/
import axios from 'axios'       // Ajax calls

// Returns Value of input selector
let getInputValue = selector => {
    return document.querySelector(selector).value
}

// Clears Value of input selector
let clearInputValue = (selector) => {
    document.querySelector(selector).value = ""
}

// Handle submission event
// Submits to cloud function which sends an email to earl.jonathan@gmail.com and to the user
let form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let notification = document.querySelector('.nav-bar__notification')

    // Get form data
    let formData = {
        name: getInputValue('.contact__name'),
        email: getInputValue('.contact__email'),
        msg: getInputValue('.contact__msg')
    }

    // Submit form data
    // Success: clear data display success message
    // Failure: display error message
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

// Allow user to hide notification bar by clicking it
let notification = document.querySelector('.nav-bar__notification')
notification.onclick = (e) => {
    e.preventDefault()
    notification.style.display = 'none'
}