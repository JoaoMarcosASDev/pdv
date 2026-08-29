import EventEmitter from 'node:events';
import estoqueRoute from '#routes/estoqueRoute.js';
import rootRoute from '#routes/rootRoute.js';

const Router = new EventEmitter();

const listenerRouteFactory = (eventRoute) =>
    (req, res) => eventRoute.emit(req.method, req, res);

const cbEstoqueRoute = listenerRouteFactory(estoqueRoute);
const cbRootRoute = listenerRouteFactory(rootRoute);

Router.on('/', cbRootRoute);
Router.on('/estoque/', cbEstoqueRoute);

export default Router;
