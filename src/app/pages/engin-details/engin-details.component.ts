import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Materiel} from '../../services/materiel/classes/materiel';
import {MaterielService} from '../../services/materiel/materiel.service';
import {Engin} from '../../services/engin/classes/engin';
import {EnginService} from '../../services/engin/engin.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-engin-details',
  templateUrl: './engin-details.component.html',
  styleUrls: ['./engin-details.component.scss']
})
export class EnginDetailsComponent implements OnInit {

  enginObservable: Observable<Engin>;

  engin: Engin;
  enginID: string;


  constructor(private enginService: EnginService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.enginID = this.route.snapshot.paramMap.get('id');
    this.reloadData();
    console.log(this.enginID);

  }


  reloadData() {
    this.enginObservable = this.enginService.getEngin(this.enginID);
    this.enginObservable.subscribe((data) => { this.engin = data; });
  }

}
