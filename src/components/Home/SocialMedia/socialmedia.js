import './socialmedia.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookSquare , faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => {
    return ( 
        <div className="container-fluid">
            <div className='d-flex w-4' style={{backgroundColor: "rgb(196, 192, 192)"}}>
                <h3 className='texto'> SEGUINOS EN NUESTRAS REDES SOCIALES </h3>
                <div className='logoSocial d-inline-block align-text-top'>
                    <FontAwesomeIcon icon={faFacebookSquare} className='m-2' style={{color: "blue"}}/>
                    <FontAwesomeIcon icon={faInstagramSquare} className='m-2' style={{color: "rgb(175, 120, 17)"}}/>
                    <FontAwesomeIcon icon={faTwitterSquare} className='m-2' style={{color: "rgb(12, 129, 238)"}}/>
                </div>
            </div>
        </div> 
    );
}
 
export default SocialMedia;