import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Transporteur} from '../transporters/Transporteur';
import {Conducteur} from './conducteur';

@Injectable({
  providedIn: 'root'
})
export class ConducteurService {

  private conducteursUrl = 'http://localhost:8080/conducteurs/all';

  constructor(private http: HttpClient) { }


  getAllConducteurs(): Observable<Conducteur[]> {
    return this.http.get<Conducteur[]>(this.conducteursUrl);
  }
}
