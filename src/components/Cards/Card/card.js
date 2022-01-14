import './card.css'

const Card = ({ deporte, url_imagen, children }) => {
    
    return ( 
        <div className="card" style={{width: "18rem"}}>
        <img src={url_imagen} className="card-img-top img" alt="Imagen Card" />
            <div className="card-body">
                <h5 className="card-title">{deporte}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            {children}
        </div>
     );
}
 
export default Card;