import { Component, OnInit } from '@angular/core';
import {Camion} from '../../services/camion/classes/camion';
import {CamionServiceService} from '../../services/camion/camion-service.service';
import {Accessoire} from '../../services/accessoire/classes/accessoire';
import {AccessoireService} from '../../services/accessoire/accessoire.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-ajouter-camion',
  templateUrl: './ajouter-camion.component.html',
  styleUrls: ['./ajouter-camion.component.scss']
})
export class AjouterCamionComponent implements OnInit {
  private camion: Camion;

  constructor(private camionService: CamionServiceService) { }

  ngOnInit() {
  }


  onSubmit(f: NgForm) {
    this.camion = new Camion();
   this.camion.marque = f.value.valueOf()['marque'];
    this.camion.modele = f.value.valueOf()['modele'];
    this.camion.boiteVitesse = f.value.valueOf()['boiteVitesse'];
    this.camion.kilometrage = f.value.valueOf()['kilometrage'];
    this.camion.carburant = f.value.valueOf()['carburant'];
    this.camion.chargePoids = f.value.valueOf()['chargePoids'];
    this.camion.puissance = f.value.valueOf()['puissance'];


    console.log(this.camion);
    this.camionService.createCamion(this.camion);

  }

}
