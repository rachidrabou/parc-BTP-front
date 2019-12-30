import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Materiel} from '../../services/materiel/classes/materiel';
import {MaterielService} from '../../services/materiel/materiel.service';
import {Engin} from '../../services/engin/classes/engin';
import {EnginService} from '../../services/engin/engin.service';
import {ActivatedRoute} from '@angular/router';
import {HistoriqueConduiteEngin} from '../../services/engin/classes/historiqueConduiteEngin';

@Component({
  selector: 'app-engin-details',
  templateUrl: './engin-details.component.html',
  styleUrls: ['./engin-details.component.scss']
})
export class EnginDetailsComponent implements OnInit {

  enginObservable: Observable<Engin>;
  historiqueConduiteEnginObservable: Observable<HistoriqueConduiteEngin[]>;
  historiqueConduiteEngin: HistoriqueConduiteEngin[];
  engin: Engin;
  enginID: string;
  dernierEtat: number;
  private nombrePannes = 0;


  constructor(private enginService: EnginService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.enginID = this.route.snapshot.paramMap.get('id');
    this.reloadData();
    console.log(this.enginID);

  }


  reloadData() {
    this.enginObservable = this.enginService.getEngin(this.enginID);
    this.enginObservable.subscribe((data) => { this.engin = data;
    this.dernierEtat = data.historiquePannes.length;
      this.dernierEtat = data.historiquePannes.length;
      for (let i = 0; i < this.dernierEtat ; i++) {
        if (data.historiquePannes[i].status.etat === 'En panne') {
          this.nombrePannes = this.nombrePannes + 1;
        }
      }
    });

    this.historiqueConduiteEnginObservable = this.enginService.getHistorique(this.enginID);
    this.historiqueConduiteEnginObservable.subscribe((data) => {this.historiqueConduiteEngin = data; });
  }

}
