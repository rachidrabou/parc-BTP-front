import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Engin} from '../engin/classes/engin';
import {Materiel} from './classes/materiel';

@Injectable({
  providedIn: 'root'
})
export class MaterielService {

  private materielsUrl = 'http://localhost:8080/materiels/all';
  private materielDetailsUrl = 'http://localhost:8080/materiels/';

  constructor(private http: HttpClient) { }

  getAllMateriels(): Observable<Materiel[]> {
    return this.http.get<Materiel[]>(this.materielsUrl);
  }


  getMateriel(id: string): Observable<Materiel> {
    return this.http.get<Materiel>(this.materielDetailsUrl + id);
  }


}
