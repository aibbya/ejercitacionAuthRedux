
import Home from '../pages/Home';


class Page {
	constructor(component, path, exact = true) {
		this.component = component;
		this.path = path;
		this.key = path;
		this.exact = exact;
	}
}

export const Pages = [
	new Page(Home, "/home")

];
