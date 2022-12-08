import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetUserAll{
    async execute(): Promise<User[]>{
        const users = await prisma.user.findMany({
            include: {
                movie_rent:{
                    select: {
                        movie: {
                            select:{
                                title:true,
                                release_date:true,
                            }
                        }
                    }
                }
            }
        });
        return users;
    }
}