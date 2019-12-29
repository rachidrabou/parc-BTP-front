import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Camion} from './classes/camion';
import {catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CamionServiceService {

  private camionsUrl = 'http://localhost:8080/camions/all';
  private camionByIdUrl = 'http://localhost:8080/camions/';
  private addCamionUrl = 'http://localhost:8080/camions/add';


  constructor(private http: HttpClient) { }


  getAllCamions(): Observable<Camion[]> {
    return this.http.get<Camion[]>(this.camionsUrl);
  }

  getCamionById(id: string): Observable<Camion> {
    return this.http.get<Camion>(this.camionByIdUrl + id);
  }

  public createCamion(camion: Camion){
    return this.http.post(`${this.addCamionUrl}`, camion);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



}
