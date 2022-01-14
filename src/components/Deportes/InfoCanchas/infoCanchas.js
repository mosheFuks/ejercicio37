import './infoCanchas.css'


const InfoCanchas = ({jugadores, nombre, techo, url_imagen, children}) => {
    
    return (  
    <>
    <div className="card mb-3 shadow" style={{maxwidth: "540px"}}>
        <div className="row g-0">
                <div className="col-md-4">
                    <img className="imgCancha" src={url_imagen} alt="Imagen cancha" />
                </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    {jugadores ? <p><b>CANTIDAD DE JUGADORES: {jugadores}</b></p> : ''} 
                    <p><b>CANCHA TECHADA: </b>{techo ? 'SI' : 'NO'}</p>
                    <p className='d-flex'><b>HORARIOS: (HAGA CLICK EN UNO PARA RESERVAR)</b></p>
                    <p>{children}</p>
                </div>
            </div>
        </div>
</div>
        
    </>   
        
    );
            
}
 
export default InfoCanchas;