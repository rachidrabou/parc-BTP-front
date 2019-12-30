import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Transporteur} from '../transporters/Transporteur';
import {Conducteur} from './conducteur';
import {Magasinier} from '../magasiniers/magasinier';
import {Admin} from '../administrateurs/admin';

@Injectable({
  providedIn: 'root'
})
export class ConducteurService {

  private allConducteursUrl = 'http://localhost:8080/conducteurs/all';
  private getConducteurUrl = 'http://localhost:8080/conducteurs/';

  constructor(private http: HttpClient) { }


  getAllConducteurs(): Observable<Conducteur[]> {
    return this.http.get<Conducteur[]>(this.allConducteursUrl);
  }



  getConducteur(id: string): Observable<Conducteur> {
    return this.http.get<Conducteur>(this.getConducteurUrl + id);
  }
}
