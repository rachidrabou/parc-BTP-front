import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Transporteur} from '../../services/user/transporters/Transporteur';
import {TransporterService} from '../../services/user/transporters/transporter.service';
import {ActivatedRoute} from '@angular/router';
import {Admin} from '../../services/user/administrateurs/admin';
import {AdminService} from '../../services/user/administrateurs/admin.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {

  adminObservable: Observable<Admin>;

  admin: Admin;
  adminID: string;


  constructor(private adminService: AdminService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.adminID = this.route.snapshot.paramMap.get('id');
    this.reloadData();
    console.log(this.adminID);

  }


  reloadData() {
    this.adminObservable = this.adminService.getAdmin(this.adminID);
    this.adminObservable.subscribe((data) => { this.admin = data; });
  }

}
