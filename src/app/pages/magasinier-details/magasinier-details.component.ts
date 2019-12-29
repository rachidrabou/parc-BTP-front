import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Admin} from '../../services/user/administrateurs/admin';
import {AdminService} from '../../services/user/administrateurs/admin.service';
import {ActivatedRoute} from '@angular/router';
import {Magasinier} from '../../services/user/magasiniers/magasinier';
import {MagasinierService} from '../../services/user/magasiniers/magasinier.service';

@Component({
  selector: 'app-magasinier-details',
  templateUrl: './magasinier-details.component.html',
  styleUrls: ['./magasinier-details.component.scss']
})
export class MagasinierDetailsComponent implements OnInit {

  magasinierObservable: Observable<Magasinier>;

  magasinier: Magasinier;
  magasinierID: string;


  constructor(private magasinierService: MagasinierService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.magasinierID = this.route.snapshot.paramMap.get('id');
    this.reloadData();
    console.log(this.magasinierID);

  }


  reloadData() {
    this.magasinierObservable = this.magasinierService.getMagasinier(this.magasinierID);
    this.magasinierObservable.subscribe((data) => { this.magasinier = data; });
  }

}
