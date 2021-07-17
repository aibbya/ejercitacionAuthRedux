import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Pages } from './config/Pages';
import { Route } from './config/Route';
import userIsLogged from './features/auth/userIsLogged'

function App() {
	useEffect(() => {
		console.log(
			`${
				userIsLogged()
					? "El usuario esta autenticado"
					: "El usuario no esta autenticado"
			}`
		);
	}, []);

	return (
		<Router>
			<Switch>
				{Pages.map(page => (
					<Route {...page} />
				))}			
			</Switch>
		</Router>
	);
}

export default App;

