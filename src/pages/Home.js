import React, {useState, useEffect} from 'react'
import userIsLogged from '../utils/userIsLogged';

const Home = () => {
    const [modo, setModo] = useState(false)

    useEffect( ()=> {
        setModo(userIsLogged())
      }, [modo]);

    return (
        modo ? (
        <div>
            HOLA!! SOLO ESTAS ACA PORQUE ESTAS LOGUEADO
        </div>)
        :
        (
            <div> HOLA!! DEBES INICIAR SESION </div>
        )
    )
}

export default Home
