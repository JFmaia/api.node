import { Request, Response } from "express";
import { GetMoviesByRealeseDate } from "./GetMoviesByRealeseDate";


export class GetMoviesByRealeseDateController{
    async handle(req: Request, res:Response){
        const getMovies = new GetMoviesByRealeseDate();

        const result = await getMovies.execute();

        return res.status(201).json(result);
    }
}