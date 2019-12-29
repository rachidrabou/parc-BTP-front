import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Transporteur} from '../transporters/Transporteur';
import {Magasinier} from './magasinier';
import {Admin} from '../administrateurs/admin';

@Injectable({
  providedIn: 'root'
})
export class MagasinierService {

  private allMagasinierUrl = 'http://localhost:8080/magasiniers/all';

  private magasinierById = 'http://localhost:8080/magasiniers/';



  constructor(private http: HttpClient) { }





  getAllMagasinier(): Observable<Magasinier[]> {
    return this.http.get<Magasinier[]>(this.allMagasinierUrl);
  }

  getMagasinier(id: string): Observable<Magasinier> {
    return this.http.get<Admin>(this.magasinierById + id);
  }



}
