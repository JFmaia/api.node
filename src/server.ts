import "express-async-errors";
import express, { NextFunction, Request, Response } from 'express';
import { routes } from './routes';
import { AppError } from "./errors/AppError";

const app = express();

app.use(express.json());
app.use(routes);

// MiddleWhere de erros
app.use((err: Error, request: Request, response: Response, next: NextFunction)=>{
    //Se o erro ja foi tratado por nos vai mostrar o que foi definido em AppError!
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message
        })
    }

    // Se o erro não foi tratado por nos vai mostrar o erro em sé!
    return response.status(500).json({
        status: "error",
        message: `Internal Server Error - ${err.message}`,
    })
})

app.listen(3333, () => console.log("Server is running in port 3333!"));