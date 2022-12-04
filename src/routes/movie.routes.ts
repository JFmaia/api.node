import { Router } from "express";
import { CreateMovieController } from "../modules/movies/movieCase/createMovie/CreateMovieController";
import { CreateMovieRentController } from "../modules/movies/movieCase/CreateMovieRent/CreateMovieRentController";

const createMovieController = new CreateMovieController();
const createMovieRentController = new CreateMovieRentController();

const movieRoutes = Router();

movieRoutes.post("/", createMovieController.handle);
movieRoutes.post("rent", createMovieRentController.handle);

export {movieRoutes};
