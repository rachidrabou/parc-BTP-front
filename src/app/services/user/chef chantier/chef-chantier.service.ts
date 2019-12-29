import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Transporteur} from '../transporters/Transporteur';
import {ChefChantier} from './chefChantier';
import {Magasinier} from '../magasiniers/magasinier';
import {Admin} from '../administrateurs/admin';

@Injectable({
  providedIn: 'root'
})
export class ChefChantierService {


  private allChefsChantierUrl = 'http://localhost:8080/chefschantier/all';
  private chefChantierUrl = 'http://localhost:8080/chefschantier/';

  constructor(private http: HttpClient) { }


  getAllChefsChantier(): Observable<ChefChantier[]> {
    return this.http.get<ChefChantier[]>(this.allChefsChantierUrl);
  }

  getChefChantier(id: string): Observable<ChefChantier> {
    return this.http.get<ChefChantier>(this.chefChantierUrl + id);
  }

}
