import express from "express";
import { registerMiddleware } from "./register-middleware.js";


export const startServer = () => {
    const app = express();

    registerMiddleware(app);

    app.listen(process.env.PORT, (req, res) => {
        console.log(`Listing At Port No ${process.env.PORT}`);
    })
}