import '../App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faSpotify,
  faSoundcloud
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

  

  return (
    <>

        <div className= "footer-container">
            <div className='links'>
                <a href='#'>Home</a>
                <a href='#'>Shows</a>
                <a href='#'>Merch</a>
                <a href='#'>Contact</a>
            </div>


            <div className="social-media">
            <a href='#'><FontAwesomeIcon icon={faFacebook} /></a>
            <a href='#'><FontAwesomeIcon icon={faInstagram} /></a>
            <a href='#'><FontAwesomeIcon icon={faTwitter} /></a>
            <a href='#'><FontAwesomeIcon icon={faYoutube} /></a>
            <a href='#'><FontAwesomeIcon icon={faSpotify} /></a>
            <a href='#'><FontAwesomeIcon icon={faSoundcloud} /></a>
            </div>
        </div>
    </>
  )
}

export default Footer
