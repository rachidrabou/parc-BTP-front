import { Component, OnInit } from '@angular/core';
import {Camion} from '../../services/camion/classes/camion';
import {CamionServiceService} from '../../services/camion/camion-service.service';

@Component({
  selector: 'app-ajouter-camion',
  templateUrl: './ajouter-camion.component.html',
  styleUrls: ['./ajouter-camion.component.scss']
})
export class AjouterCamionComponent implements OnInit {

  private camion: Camion = new Camion('Mercedes', 'Hybride', 145620);


  constructor(private camionService: CamionServiceService) {
  }

  ngOnInit() {


  }

  createCamion() {
    this.camionService.createCamion(this.camion);
    console.log('c est wow!');
  }

}
