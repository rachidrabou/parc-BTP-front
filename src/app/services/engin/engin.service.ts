import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Camion} from '../camion/classes/camion';
import {Engin} from './classes/engin';
import {Materiel} from '../materiel/classes/materiel';
import {HistoriqueConduiteEngin} from './classes/historiqueConduiteEngin';

@Injectable({
  providedIn: 'root'
})
export class EnginService {

  private enginsUrl = 'http://localhost:8080/engins/all';

  private enginUrl = 'http://localhost:8080/engins/';
  private addEnginUrl = 'http://localhost:8080/engins/add';
  private historiqueEnginUrl = 'http://localhost:8080/historiqueConduiteEngin/engin/';


  constructor(private http: HttpClient) { }


  getAllEngins(): Observable<Engin[]> {
    return this.http.get<Engin[]>(this.enginsUrl);
  }


  getEngin(id: string): Observable<Engin> {
    return this.http.get<Engin>(this.enginUrl + id);
  }

  public createEngin(engin: Engin) {
    return this.http.post(this.addEnginUrl, engin).subscribe(response => console.log(response));
  }

  getHistorique(id: string): Observable<HistoriqueConduiteEngin[]> {
    return this.http.get<HistoriqueConduiteEngin[]>(this.historiqueEnginUrl + id);
  }



}
