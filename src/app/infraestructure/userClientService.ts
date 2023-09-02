import { Injectable } from '@angular/core';
import { IUserClientService } from '../outbound/userClientServiceInterface';
import { Users } from '../models/users';
import Axios from 'axios';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ComunaDto } from '../models/comunaDto';
@Injectable({ providedIn: 'root' })
export class UserClientService {
  private path = 'http://localhost:8080';
  constructor(private http: HttpClient) {}
  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.path}/getusers`);
  }
  saveUser(usuarios: any): any {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.path}/saveuser`, usuarios, { headers });
  }
  updateUser(usuarios: Users): any {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.path}/updateuser`, usuarios, { headers });
  }
  deleteUser(userId: number): any {
    return this.http.delete(`${this.path}/deleteuser/${userId}`);
  }

  getComuna(): Observable<ComunaDto[]> {
    return this.http.get<ComunaDto[]>(`${this.path}/getcomuna`);
  }
}
