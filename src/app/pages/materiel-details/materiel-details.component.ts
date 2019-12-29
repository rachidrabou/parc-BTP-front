import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Materiel} from '../../services/materiel/classes/materiel';
import {MaterielService} from '../../services/materiel/materiel.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-materiel-details',
  templateUrl: './materiel-details.component.html',
  styleUrls: ['./materiel-details.component.scss']
})
export class MaterielDetailsComponent implements OnInit {

  materielObservable: Observable<Materiel>;

  materiel: Materiel;
  materielID: string;


  constructor(private materielService: MaterielService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.materielID = this.route.snapshot.paramMap.get('id');
    this.reloadData();
    console.log(this.materielID);

  }


  reloadData() {
    this.materielObservable = this.materielService.getMateriel(this.materielID);
    this.materielObservable.subscribe((data) => { this.materiel = data; });
  }

}
