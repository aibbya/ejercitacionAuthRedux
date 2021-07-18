import React, { useState, Fragment, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import FormLogin from "../features/auth/components/form/FormLogin";
import { Redirect } from 'react-router-dom';


const Login = () => {
   
    const auth = useSelector(state => state.auth.state)
    const toast = useToast()
    const [active, setActive] = useState(false)

    useEffect(() => {
        if (auth ==="success"){
            toast({
                title: "Bienvenido!",
                status: "success",
                duration: 3000,
              })
              setTimeout(() => {
                  setActive(true)                  
              }, 3500);
              
        } else if (auth === "error"){
            toast({
                title: "Ups.. Usuario y/o contraseña incorrecta",
                status: "error",
                duration: 3000,
              })
        }
    }, [auth]);  
    return (
        <Fragment>
        {
            active ?
            ( <Redirect to="/home"></Redirect>)
            :
            (<FormLogin></FormLogin> )
        }


        // 
        
        </Fragment>
    )
}

export default Login
