import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Engin} from '../engin/classes/engin';

@Injectable({
  providedIn: 'root'
})
export class ObjetMobileService {

  private allObjetsMobilesUrl = 'http://localhost:8080/objets/all';


  constructor(private http: HttpClient) { }


  getAllObjetsMobiles(): Observable<Object[]> {
    return this.http.get<Object[]>(this.allObjetsMobilesUrl);
  }

}
