import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../user/classes/user';
import {Accessoire} from './classes/accessoire';
import {Camion} from '../camion/classes/camion';

@Injectable({
  providedIn: 'root'
})
export class AccessoireService {

  private accessoiresUrl = 'http://localhost:8080/accessoires/all';
  private accessoireById = 'http://localhost:8080/accessoires/';
  private addAccessoireUrl = 'http://localhost:8080/accessoires/add';

  constructor(public http: HttpClient) { }


  getAllAccessoires(): Observable<Accessoire[]> {
    return this.http.get<Accessoire[]>(this.accessoiresUrl);
  }

  getAccessoireById(id: string): Observable<Accessoire> {
    return this.http.get<Accessoire>(this.accessoireById + id);
  }

  public createAccessoire(nomAccessoire: string) {
    return this.http.post(this.addAccessoireUrl, nomAccessoire).subscribe(response => console.log(response));
  }


}
