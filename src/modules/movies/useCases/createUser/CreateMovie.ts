import { Movie} from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateMoviesDTO } from "../../dto/CreateMoviesDTO";

export class CreateMovie{
   async execute({title, duration, release_date}:CreateMoviesDTO): Promise<Movie>{
    //verificar se o filme ja existe
    const movieAlreadyExists = await prisma.movie.findUnique({
        where:{
            title: title
        }
    })

    if(movieAlreadyExists){
        throw new AppError("Movie already exists!",400);
    }
    
    //Criar filme
    const newMovie = await prisma.movie.create({
        data: {
            title: title,
            duration: duration,
            release_date: release_date
        }
    });

    return newMovie;
   }
}