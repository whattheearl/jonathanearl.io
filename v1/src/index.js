
// Styles
import './style/index.scss'

// Components
import './js/nav-button'
import './js/contact-notification'

// HTML
if(process.env.NODE_ENV != 'production') {
    require('./index.html')
    require('./error.html')
}