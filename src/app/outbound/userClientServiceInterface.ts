import { Users } from "../models/users";

export interface IUserClientService {
    getUsers():any;
    saveUser(usuarios:Users):any;
    updateUser(usuarios:Users):any;
    deleteUser(userId:number):any;
}