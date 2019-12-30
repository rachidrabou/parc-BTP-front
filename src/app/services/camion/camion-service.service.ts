import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Camion} from './classes/camion';
import {BonTransport} from './classes/BonTransport';


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
  private getAllBonTransport = 'http://localhost:8080/bonsTransport/camion/';


  constructor(private http: HttpClient) { }


  getAllCamions(): Observable<Camion[]> {
    return this.http.get<Camion[]>(this.camionsUrl);
  }

  getCamionById(id: string): Observable<Camion> {
    return this.http.get<Camion>(this.camionByIdUrl + id);
  }


  public createCamion(camion: Camion) {

    return this.http.post(this.addCamionUrl, camion).subscribe(response => console.log(response));
  }

  getBonsDeTransport(id: string): Observable<BonTransport[]> {
    return this.http.get<BonTransport[]>(this.getAllBonTransport + id);
  }







}
