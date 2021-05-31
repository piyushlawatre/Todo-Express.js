import { json } from "express";
import { routes } from "./routes.js";

export const registerMiddleware = (app) => {
    app.use(json());

    app.use((req, res, next) => {
        next();
    });

    for (let route of routes) {
        app.use(route.path, route.handler);
    }

    app.use((err, req, res, next) => {

    });
}