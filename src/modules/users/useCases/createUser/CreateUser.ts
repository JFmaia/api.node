import { User } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dto/CreateUserDTO";

export class CreateUser{
   async execute({name, email}:CreateUserDTO): Promise<User>{
    //verificar se o usuário existe
    const userAlreadyExists = await prisma.user.findUnique({
        where:{
            email:email
        }
    })

    if(userAlreadyExists){
        throw new AppError("User already exists!",400);
    }
    
    //Criar usuário
    const newUser = await prisma.user.create({
        data: {
            name: name,
            email: email,
        }
    });

    return newUser;
   }
}