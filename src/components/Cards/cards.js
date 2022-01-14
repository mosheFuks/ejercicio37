import {useContext} from 'react'
import { Context } from '../../store/appContext'
import Card from './Card'
import { Link } from 'react-router-dom'

const Cards = () => {
    const { deportes } = useContext(Context)

    return (
        <div className='container-fluid'>
                <h2 className='text-center m-2 p-2'>NUESTRAS CANCHAS</h2>
                <div className="d-flex justify-content-around m-4 shadow">
                {deportes.map((deporte) => (
                    <Card key={deporte.id} {...deporte}>
                        <Link to={`/${deporte.deporte}`} className="btn">
                            <button className="btn btn-primary ">
                                IR A DETALLES
                            </button>
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
        

    );
}
 
export default Cards;