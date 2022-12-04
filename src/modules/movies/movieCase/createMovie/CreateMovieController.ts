import { Request, Response } from "express";
import { CreateMovie } from "./CreateMovie";

export class CreateMovieController{
    async handle(req: Request, res:Response){
        const {title, duration, release_date} = req.body;

        const createMovie = new CreateMovie();

        const result = await createMovie.execute({title, duration, release_date});

        return res.status(201).json(result);
    }
}