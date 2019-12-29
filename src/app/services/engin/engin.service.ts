import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Camion} from '../camion/classes/camion';
import {Engin} from './classes/engin';
import {Materiel} from '../materiel/classes/materiel';

@Injectable({
  providedIn: 'root'
})
export class EnginService {

  private enginsUrl = 'http://localhost:8080/engins/all';

  private enginUrl = 'http://localhost:8080/engins/';


  constructor(private http: HttpClient) { }


  getAllEngins(): Observable<Engin[]> {
    return this.http.get<Engin[]>(this.enginsUrl);
  }


  getEngin(id: string): Observable<Engin> {
    return this.http.get<Engin>(this.enginUrl + id);
  }



}
