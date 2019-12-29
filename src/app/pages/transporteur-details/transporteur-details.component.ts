import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Camion} from '../../services/camion/classes/camion';
import {CamionServiceService} from '../../services/camion/camion-service.service';
import {ActivatedRoute} from '@angular/router';
import {Transporteur} from '../../services/user/transporters/Transporteur';
import {TransporterService} from '../../services/user/transporters/transporter.service';

@Component({
  selector: 'app-transporteur-details',
  templateUrl: './transporteur-details.component.html',
  styleUrls: ['./transporteur-details.component.scss']
})
export class TransporteurDetailsComponent implements OnInit {

  transporteurObservable: Observable<Transporteur>;

  transporteur: Transporteur;
  transporteurID: string;


  constructor(private transporteurService: TransporterService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.transporteurID = this.route.snapshot.paramMap.get('id');
    this.reloadData();
    console.log(this.transporteurID);

  }


  reloadData() {
    this.transporteurObservable = this.transporteurService.getTransporteurById(this.transporteurID);
    this.transporteurObservable.subscribe((data) => { this.transporteur = data; });
  }

}
