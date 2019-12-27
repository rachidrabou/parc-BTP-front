import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Camion} from '../../services/camion/classes/camion';
import {CamionServiceService} from '../../services/camion/camion-service.service';

@Component({
  selector: 'app-camions',
  templateUrl: './camions.component.html',
  styleUrls: ['./camions.component.scss']
})
export class CamionsComponent implements OnInit {

  camions: Observable<Camion[]>;

  constructor(private camionsService: CamionServiceService) { }

  ngOnInit() {
    this.reloadData();
  }


  reloadData() {
    this.camions = this.camionsService.getAllCamions();
  }

}
