import '../App.css'
import { NavLink } from 'react-router-dom';
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

          <div className="social-media">

                <div className='fb-insta-x'>
                  <a href='#'><FontAwesomeIcon icon={faFacebook} /></a>
                  <a href='#'><FontAwesomeIcon icon={faInstagram} /></a>
                  <a href='#'><FontAwesomeIcon icon={faTwitter} /></a>
                </div>

                <div className='music-platforms'>
                  <a href='#'><FontAwesomeIcon icon={faYoutube} /></a>
                  <a href='#'><FontAwesomeIcon icon={faSpotify} /></a>
                  <a href='#'><FontAwesomeIcon icon={faSoundcloud} /></a>
                </div>
                
              </div>

            <div className='links'>
                <NavLink to='/'>
                <a href=''>Home</a>
                </NavLink>
                <NavLink to='/shows'>
                <a href=''>Shows</a>
                </NavLink>
                <a href='#'>Merch</a>
                <a href='#'>Contact</a>
            </div>


         
        </div>
    </>
  )
}

export default Footer
