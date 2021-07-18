import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import { Pages } from './config/Pages';
import { RoutePrivate } from './config/RoutePrivate';
import userIsLogged from './utils/userIsLogged';
import Login from './pages/Login';
import Home from './pages/Home';

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
			<Route path="/login" component={Login}></Route>
			<Route exact path="/" component={Home}></Route>
				{Pages.map(page => (
					<RoutePrivate {...page} />
				))}
			</Switch>
		</Router>
	);
}

export default App;

