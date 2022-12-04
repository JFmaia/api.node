import { Router } from "express";
import { CreateMovieController } from "../modules/movies/movieCase/createUser/CreateMovieController";

const createMovieController = new CreateMovieController();

const movieRoutes = Router();

movieRoutes.post("/", createMovieController.handle);

export {movieRoutes};
