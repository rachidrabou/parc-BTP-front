import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Engin} from '../engin/classes/engin';
import {User} from './classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'http://localhost:8080/users/all';

  constructor(private http: HttpClient) { }


  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

}
