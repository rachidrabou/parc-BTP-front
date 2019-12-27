import { Component, OnInit } from '@angular/core';
import {EnginService} from '../../services/engin/engin.service';
import {Observable} from 'rxjs';
import {Engin} from '../../services/engin/classes/engin';

@Component({
  selector: 'app-engins',
  templateUrl: './engins.component.html',
  styleUrls: ['./engins.component.scss']
})
export class EnginsComponent implements OnInit {

  engins: Observable<Engin[]>;

  constructor(private enginService: EnginService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.engins = this.enginService.getAllEngins();  }

}
