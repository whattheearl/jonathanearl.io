
// Styles
import './style/index.scss'

// Components
import './js/components/nav-button'
import './js/components/contact-notification'

// HTML
if(process.env.NODE_ENV != 'production') {
    require('./index.html')
}