import { Component, OnInit } from '@angular/core';
import {Camion} from '../../services/camion/classes/camion';
import {CamionServiceService} from '../../services/camion/camion-service.service';
import {NgForm} from '@angular/forms';
import {Engin} from '../../services/engin/classes/engin';
import {EnginService} from '../../services/engin/engin.service';
import {Status} from '../../services/engin/classes/Status';

@Component({
  selector: 'app-ajouter-engin',
  templateUrl: './ajouter-engin.component.html',
  styleUrls: ['./ajouter-engin.component.scss']
})
export class AjouterEnginComponent implements OnInit {

  private engin: Engin;

  constructor(private enginService: EnginService) {

  }

  ngOnInit() {



  }


  onSubmit(f: NgForm) {
    this.engin = new Engin();
    this.engin.type = f.value.valueOf()['type'];
    this.engin.designation = f.value.valueOf()['designation'];
    this.engin.poids = f.value.valueOf()['poids'];
    this.engin.marque = f.value.valueOf()['marque'];
    this.engin.modele = f.value.valueOf()['modele'];
    this.engin.carburant = f.value.valueOf()['carburant'];



    console.log(this.engin);
    this.enginService.createEngin(this.engin);

  }

}
