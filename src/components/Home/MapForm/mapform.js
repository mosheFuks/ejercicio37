import './mapform.css'
import imagen from '../../img/map.jpg'

const MapForm = () => {
    return ( 
        <div className='row container mt-3 '>
            <div className='col-6'>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                    <input type="" class="form-control w-3" id="exampleFormControlInput1" placeholder="Lionel Messi " />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button className='btn btn-primary'>
                    ENVIAR
                </button>
            </div>
            <div className='col-6'>
                <img className='imagen' src={imagen} alt='mapa' />
            </div>
        </div>
     );
}
 
export default MapForm;