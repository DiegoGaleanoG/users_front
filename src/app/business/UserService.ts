import { Inject, Injectable } from '@angular/core';
import { IUserService } from './IUserService';
import { Users } from '../models/users';
import { IUserClientService } from '../outbound/userClientServiceInterface';
import { UserClientService } from '../infraestructure/userClientService';

@Injectable()
export class UserService implements IUserService {
  constructor(private userClientService: UserClientService) {}

  getUsers(): Users[] {
    let users: Users[] = [];
    return users;
    /*this.userClientService.getUsers().subscribe(data => {
        this.users = data;
      });
     
     /*users = user.then((value) =>{
         console.log('diego retorna del promise ',value[0]);
         users=value.slice();
         console.log('diego retorna del promise2 ',users[1]);
         return users;
        //return value;            
       });
       console.log('diego retorna del promise 4 ',users[1]);
     return users; */
  }

  saveUser(usuarios: Users): any {}
  updateUser(usuarios: Users): any {}

  deleteUser(userId: number): any {}
}
