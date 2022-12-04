import { Router } from "express";
import { CreateMovieController } from "../modules/movies/useCases/createUser/CreateMovieController";

const createMovieController = new CreateMovieController();

const movieRoutes = Router();

movieRoutes.post("/", createMovieController.handle);

export {movieRoutes};
