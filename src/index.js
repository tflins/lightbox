import './assest/css/lightbox.css'
import Lightbox from './js/Lightbox'

if (window && !window.Lightbox) {
  window.Lightbox = Lightbox
}

export default Lightbox
