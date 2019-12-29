import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Admin} from '../../services/user/administrateurs/admin';
import {AdminService} from '../../services/user/administrateurs/admin.service';
import {Conducteur} from '../../services/user/conducteurs/conducteur';
import {ConducteurService} from '../../services/user/conducteurs/conducteur.service';

@Component({
  selector: 'app-conducteur',
  templateUrl: './conducteur.component.html',
  styleUrls: ['./conducteur.component.scss']
})
export class ConducteurComponent implements OnInit {

  conducteurs: Observable<Conducteur[]>;

  constructor(private conducteurService: ConducteurService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.conducteurs = this.conducteurService.getAllConducteurs();
  }
}
