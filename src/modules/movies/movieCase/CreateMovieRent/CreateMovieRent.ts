import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateMovieRentDTO } from "../../dto/CreateMovieRentDTO";

export class CreateMovieRent{
    async execute({movieId, userId}:CreateMovieRentDTO):Promise<void>{
        //Verificar se filme existe 
        const movieExists = await prisma.movie.findUnique({
            where:{
                id:movieId
            }
        });

        if(!movieExists) {
            throw new AppError("Movie not found!",400);
        }

        //Verificar se o filme não estar alugado por outra pessoa
        const movieAlreadyRented = await prisma.movieRent.findFirst({
            where:{
                movieId
            }
        });

        if(movieAlreadyRented) {
            throw new AppError("Movie already rented!",400);
        }

        //verificar se o usuário existe
        const userExists = await prisma.user.findUnique({
            where:{
                id:userId
            }
        });
        
        if(!userExists) {
            throw new AppError("User not found!",400);
        }

        //Criar alocação de filme
        await prisma.movieRent.create({
            data: {
                movieId,
                userId
            }
        });
    }
}