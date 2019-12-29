import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {Observable} from 'rxjs';
import {User} from '../../services/user/classes/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: Observable<User[]>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.users = this.userService.getAllUsers();
  }

}
