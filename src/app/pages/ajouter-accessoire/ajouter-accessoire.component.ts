import { Component, OnInit } from '@angular/core';
import {AccessoireService} from '../../services/accessoire/accessoire.service';
import {Accessoire} from '../../services/accessoire/classes/accessoire';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-ajouter-accessoire',
  templateUrl: './ajouter-accessoire.component.html',
  styleUrls: ['./ajouter-accessoire.component.scss']
})
export class AjouterAccessoireComponent implements OnInit {

  accessoire: Accessoire = new Accessoire();
  nomAccesoire: string;

  constructor(private accessoireService: AccessoireService) { }

  ngOnInit() {
  }

  createAccessoire() {
    // this.accessoireService.createAccessoire(this.accessoire);
  }

  onSubmit(f: NgForm) {
    this.nomAccesoire = f.value.valueOf()['nom'];
    console.log(this.nomAccesoire);
    this.accessoireService.createAccessoire(this.nomAccesoire);
  }
}
