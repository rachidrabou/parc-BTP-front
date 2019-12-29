import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Transporteur} from './Transporteur';
import {Engin} from '../../engin/classes/engin';

@Injectable({
  providedIn: 'root'
})
export class TransporterService {

  private transportersUrl = 'http://localhost:8080/transporteurs/all';
  private transportersByIDUrl = 'http://localhost:8080/transporteurs/';

  constructor(private http: HttpClient) { }


  getAllTransporteurs(): Observable<Transporteur[]> {
    return this.http.get<Transporteur[]>(this.transportersUrl);
  }


  getTransporteurById(id: string): Observable<Transporteur> {
    return this.http.get<Transporteur>(this.transportersByIDUrl + id);
  }



}
