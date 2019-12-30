import { Component, OnInit } from '@angular/core';
import {Engin} from '../../services/engin/classes/engin';
import {EnginService} from '../../services/engin/engin.service';
import {NgForm} from '@angular/forms';
import {User} from '../../services/user/classes/user';
import {Admin} from '../../services/user/administrateurs/admin';
import {AdminService} from '../../services/user/administrateurs/admin.service';
import {Role} from '../../services/user/classes/Role';

@Component({
  selector: 'app-ajouter-admin',
  templateUrl: './ajouter-admin.component.html',
  styleUrls: ['./ajouter-admin.component.scss']
})
export class AjouterAdminComponent implements OnInit {

  private admin: User;

  constructor(private adminService: AdminService) {

  }

  ngOnInit() {



  }


  onSubmit(f: NgForm) {
    this.admin = new Admin();
    this.admin.firstName = f.value.valueOf()['firstName'];
    this.admin.lastName = f.value.valueOf()['lastName'];
    this.admin.phoneNumber = f.value.valueOf()['phoneNumber'];
    this.admin.email = f.value.valueOf()['email'];
    this.admin.ville = f.value.valueOf()['ville'];
    this.admin.pays = f.value.valueOf()['pays'];
    this.admin.username = f.value.valueOf()['username'];
    this.admin.password = f.value.valueOf()['password'];
    this.admin.dateOfBirth = f.value.valueOf()['dateOfBirth'];
    this.admin.description = f.value.valueOf()['description'];




    console.log(this.admin);
    this.adminService.createAdmin(this.admin);

  }

}
