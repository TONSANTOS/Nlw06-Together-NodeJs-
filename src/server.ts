import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import { router } from "./routes";

import "./database";

const app = express();

app.use(express.json())

app.use(router) // Todas rotas farão parte do projeto

app.use((err: Error, request: Request, response: Response, next: NextFunction) => { // Middleware para tratar error.Tudo que estiver utilizando o "throw new" vai cair aqui!
    if(err instanceof Error) {
        return response.status(400).json({
            error: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"))