import { Request, Response } from "express";
import { CreateMovieRent } from "./CreateMovieRent";

export class CreateMovieRentController{
    async handle(req: Request, res:Response){
        const {movieId, userId} = req.body;

        const createMovieRent = new CreateMovieRent();

        await createMovieRent.execute({movieId,userId});

        return res.status(201).send();
    }
}