import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE= 'http://localhost:3000/api/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  getUsers(){
    return this.http.get<any>(BASE);
  }
}
