import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Transporteur} from '../transporters/Transporteur';
import {Admin} from './admin';
import {Materiel} from '../../materiel/classes/materiel';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private allAdmins = 'http://localhost:8080/admins/all';
  private adminById = 'http://localhost:8080/admins/';

  constructor(private http: HttpClient) {
  }


  getAllAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.allAdmins);
  }


  getAdmin(id: string): Observable<Admin> {
    return this.http.get<Admin>(this.adminById + id);
  }
}
