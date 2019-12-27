import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Camion} from './classes/camion';

@Injectable({
  providedIn: 'root'
})
export class CamionServiceService {

  private camionsUrl = 'http://localhost:8080/camions/all';


  constructor(private http: HttpClient) { }


  getAllCamions(): Observable<Camion[]> {
    return this.http.get<Camion[]>(this.camionsUrl);
  }


}
