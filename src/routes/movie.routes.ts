import { Router } from "express";
import { CreateMovieController } from "../modules/movies/movieCase/createMovie/CreateMovieController";
import { CreateMovieRentController } from "../modules/movies/movieCase/CreateMovieRent/CreateMovieRentController";
import { GetMoviesByRealeseDateController } from "../modules/movies/movieCase/getMoviesByRealeseDate/GetMoviesByRealeseDateController";

const createMovieController = new CreateMovieController();
const createMovieRentController = new CreateMovieRentController();
const getMoviesByRealeseDate = new GetMoviesByRealeseDateController();

const movieRoutes = Router();

movieRoutes.post("/", createMovieController.handle);
movieRoutes.post("/rent", createMovieRentController.handle);
movieRoutes.get("/release", getMoviesByRealeseDate.handle);

export {movieRoutes};
