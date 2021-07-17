import React, { useEffect } from 'react';
import { Route as RouteReact, Redirect } from 'react-router-dom'
import userIsLogged from '../features/auth/userIsLogged';


export const Route = route => {
 
  useEffect( ()=> {
    userIsLogged()
  }, []);

  return(
    <RouteReact
      path={route.path}
      exact={route.exact}
      render= { (props) => (
        ( userIsLogged() )
            ? ( <route.component  { ...props } /> )
            : ( <Redirect to="/login" /> )
    )}
    />

   
  )
}
