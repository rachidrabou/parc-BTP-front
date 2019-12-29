import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Admin} from '../../services/user/administrateurs/admin';
import {AdminService} from '../../services/user/administrateurs/admin.service';
import {ActivatedRoute} from '@angular/router';
import {ChefChantier} from '../../services/user/chef chantier/chefChantier';
import {ChefChantierService} from '../../services/user/chef chantier/chef-chantier.service';

@Component({
  selector: 'app-chef-chantier-details',
  templateUrl: './chef-chantier-details.component.html',
  styleUrls: ['./chef-chantier-details.component.scss']
})
export class ChefChantierDetailsComponent implements OnInit {

  chefChantierObservable: Observable<ChefChantier>;

  chefChantier: Admin;
  chefChantierID: string;


  constructor(private chefChantierService: ChefChantierService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.chefChantierID = this.route.snapshot.paramMap.get('id');
    this.reloadData();
    console.log(this.chefChantierID);

  }


  reloadData() {
    this.chefChantierObservable = this.chefChantierService.getChefChantier(this.chefChantierID);
    this.chefChantierObservable.subscribe((data) => { this.chefChantier = data; });
  }

}
