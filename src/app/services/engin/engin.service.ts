import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Camion} from '../camion/classes/camion';
import {Engin} from './classes/engin';

@Injectable({
  providedIn: 'root'
})
export class EnginService {

  private enginsUrl = 'http://localhost:8080/engins/all';


  constructor(private http: HttpClient) { }


  getAllEngins(): Observable<Engin[]> {
    return this.http.get<Engin[]>(this.enginsUrl);
  }


}
