import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Accessoire} from '../../services/accessoire/classes/accessoire';
import {AccessoireService} from '../../services/accessoire/accessoire.service';


@Component({
  selector: 'app-accessoire',
  templateUrl: './accessoire.component.html',
  styleUrls: ['./accessoire.component.scss']
})
export class AccessoireComponent implements OnInit {

  accessoires: Observable<Accessoire[]>;

  constructor(private accessoireService: AccessoireService) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.accessoires = this.accessoireService.getAllAccessoires();
  }

}
