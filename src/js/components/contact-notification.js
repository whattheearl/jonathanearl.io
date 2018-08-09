import queryString from 'query-string';

const parsed = queryString.parse(window.location.search)
let notification = document.querySelector('.nav-bar__notification')

switch(parsed.success) {
    case undefined: 
        notification.innerHTML = null;
        break;
    case 'true': 
        notification.innerHTML = 'Talk to you soon!'
        notification.style.display = 'block'
        break;
    case 'false':
        notification.innerHTML = 'Error, please try again in a moment'
        notification.style.display = 'block'
        break;
}

notification.onclick = (e) => {
    e.preventDefault()

    notification.style.display = 'none'
}