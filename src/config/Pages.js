
import Home from '../pages/Home';
import Login from './../pages/Login';


class Page {
	constructor(component, path, exact = true) {
		this.component = component;
		this.path = path;
		this.key = path;
		this.exact = exact;
	}
}

export const Pages = [
	// new Page(Login, "/login"),
	new Page(Home, "/home")

];
