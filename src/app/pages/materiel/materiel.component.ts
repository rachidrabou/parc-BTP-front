import { Component, OnInit } from '@angular/core';
import {MaterielService} from '../../services/materiel/materiel.service';
import {Observable} from 'rxjs';
import {Materiel} from '../../services/materiel/classes/materiel';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.scss']
})
export class MaterielComponent implements OnInit {

  materiels: Observable<Materiel[]>;

  constructor(private materielService: MaterielService) { }

  ngOnInit() {
    this.reloadData();
  }


  reloadData() {
    this.materiels = this.materielService.getAllMateriels();
  }

}
