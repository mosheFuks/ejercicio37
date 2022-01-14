import {useContext} from 'react'
import { Context } from '../../../store/appContext'

import './carousel.css'


const Carousel = () => {
    const {deportes} = useContext(Context)
    console.log(deportes);
    
    return ( 
        <>
        {deportes.length > 0 ? 
            <div id="carouselExampleIndicators" className="carousel slide container" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={deportes[0].url_imagen} className="d-block w-100" style={{heigth: "400px"}} alt="Imagen 1" />
                    </div>
                    <div className="carousel-item">
                    <img src={deportes[1].url_imagen} className="d-block w-100" style={{heigth: "400px"}} alt="Imagen 2" />
                    </div>
                    <div className="carousel-item">
                    <img src={deportes[2].url_imagen} className="d-block w-100" style={{heigth: "400px"}} alt="Imagen 3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        : 

        <p> Cargando </p>
        
        }
        </>
     );
}

export default Carousel;