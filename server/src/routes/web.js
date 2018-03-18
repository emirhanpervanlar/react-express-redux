import AuthRouter from "./auth/auth.router";

const ServerRoutes  = (app) =>{
    app.use(AuthRouter.routePrefix,AuthRouter.route());
}

export default ServerRoutes;