import { createContext, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'



export const Context = createContext(null)

const UserProvaider = ({children}) => {
    const [deportes, setdeportes] = useState([])
    const { vardeporte } = useParams()

    
    useEffect(() => {
        axios.get(`https://apipdtc.herokuapp.com/deportes`)
        .then((response) => {
            setdeportes(response.data);
          })
    }, [])


    return (  
        <Context.Provider value={{vardeporte, deportes}}>
            {children}
        </Context.Provider>
    );
}
 
export default UserProvaider;