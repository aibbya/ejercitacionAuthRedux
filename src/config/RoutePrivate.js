import React from 'react';
import { Route as RouteReact, Redirect } from 'react-router-dom'
import userIsLogged from '../utils/userIsLogged';


export const RoutePrivate = route => {

  return (
    <RouteReact
      path={route.path}
      exact={route.exact}
      render={(props) => (
        (userIsLogged())
          ? (<route.component  {...props} />)
          : (
            <Redirect to="/login" />
          )
      )}
    />
  )
}
