import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ChefChantier} from '../../services/user/chef chantier/chefChantier';
import {Admin} from '../../services/user/administrateurs/admin';
import {ChefChantierService} from '../../services/user/chef chantier/chef-chantier.service';
import {ActivatedRoute} from '@angular/router';
import {Conducteur} from '../../services/user/conducteurs/conducteur';
import {ConducteurService} from '../../services/user/conducteurs/conducteur.service';

@Component({
  selector: 'app-conducteur-details',
  templateUrl: './conducteur-details.component.html',
  styleUrls: ['./conducteur-details.component.scss']
})
export class ConducteurDetailsComponent implements OnInit {

  conducteurObservable: Observable<Conducteur>;

  conducteur: Conducteur;
  conducteurID: string;


  constructor(private conducteurService: ConducteurService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.conducteurID = this.route.snapshot.paramMap.get('id');
    this.reloadData();
    console.log(this.conducteurID);

  }


  reloadData() {
    this.conducteurObservable = this.conducteurService.getConducteur(this.conducteurID);
    this.conducteurObservable.subscribe((data) => { this.conducteur = data; });
  }

}
