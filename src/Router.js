class Router {
    constructor(routes) {
        this.routes = routes || [];

        // listen to navigation change event (call this.nav)
        addEventListener('popstate', e => this.nav(e.state.path));
    }

    addRoute(route) {
        this.routes.push(route);
    }

    nav(path) {
        // separate out relevant part of url
        path = path.replace(location.protocol, "").replace(location.host, "").split("?")[0] || "/";
        // add new path to history
        history.pushState({path}, null, path)
        
        path = path.split("/").map(p => {
            if (p.indexOf(":") === 0) {
                return "[^//]+";
            }
            return p;
        }).join("");

        const regex = new RegExp(path);

        // find first match within this.routes[i][0] withcomponent that matches this.routes[i][1]
        const newRoute = this.routes.find(route => regex.test(route[0]));

        // insert component into #root
        this.root.shadowRoot.replaceChildren(new newRoute[1]); 
    }

    registerRoot(root) {
        this.root = root;
    }
}
export const router = new Router();
export const nav = router.nav.bind(router);