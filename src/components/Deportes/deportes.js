import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import InfoCanchas from './InfoCanchas';
import axios from 'axios'
import './deportes.css'


const Deportes = () => {
    const { vardeporte } = useParams()
    const [secciones, setsecciones] = useState([])
    const [color, setcolor ] = useState('rgb(12, 129, 238)')
    const [estador, setestador] = useState(false)
    const [conca, setconca] = useState([])
    const [ reserva, setreserva ] =useState(JSON.parse(localStorage.getItem("reservas")) !== null ? JSON.parse(localStorage.getItem("reservas")) : [])

    useEffect(() => {
        axios.get(`https://apipdtc.herokuapp.com/${vardeporte}`)
        .then((response) => {
            setsecciones(response.data);
          })
    }, [vardeporte])


    useEffect(() => {
        localStorage.setItem("reservas", JSON.stringify(reserva));
    }, [reserva]);

    

    const reservar = (idCancha, idHorario) => {
        //setcolor("red")
        setconca([{Cancha: {idCancha}, Horario: {idHorario}}])
        setreserva([conca, ...conca])
        setestador(true)
        console.log(conca);
    }

    
    return ( 
        <>
        <h1 className="text-center m-2 p-2"> Canchas de {vardeporte} </h1>
        <div className="container-fluid">
            {estador ? <p>CANCHA RESERVADA</p> : ''}
            {secciones.map((seccion) => (
                <InfoCanchas key={seccion.id} {...seccion}>
                    {seccion.horarios.map((time) => (
                    <button className='ml-3' style={{backgroundColor: color, marginLeft: "4px", color: "white"}}onClick={() => reservar(time.id, seccion.id)} key={time.id}>{time.hora}</button>
                    ))}
                </InfoCanchas>
            ))
            }
        </div>
        </>
     );
}
 
export default Deportes;