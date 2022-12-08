import { Request, Response } from "express";
import { GetUserAll } from "./GetUserAll";

export class GetUserAllController{
    async handle(req: Request, res:Response){
        const getUsers = new GetUserAll();

        const result = await getUsers.execute();

        return res.status(201).json(result);
    }
}