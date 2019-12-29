import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Transporteur} from '../../services/user/transporters/Transporteur';
import {TransporterService} from '../../services/user/transporters/transporter.service';
import {Admin} from '../../services/user/administrateurs/admin';
import {AdminService} from '../../services/user/administrateurs/admin.service';

@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrls: ['./administrateur.component.scss']
})
export class AdministrateurComponent implements OnInit {

  admins: Observable<Admin[]>;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.admins = this.adminService.getAllAdmins();
  }

}
