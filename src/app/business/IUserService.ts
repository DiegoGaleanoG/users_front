import { Users } from "../models/users";

export interface IUserService {
    getUsers():Users[];
    saveUser(usuarios:Users):any;
    updateUser(usuarios:Users):any;
    deleteUser(userId:number):any;
}