import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { GetUserAllController } from "../modules/users/useCases/getUserAll/GetUserAllController";

const createUserController = new CreateUserController();
const getUsers = new GetUserAllController();
const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/users", getUsers.handle)

export {userRoutes};
