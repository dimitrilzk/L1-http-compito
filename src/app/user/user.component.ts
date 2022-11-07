import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userList: User[] = [];

  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.service.getAllUser().subscribe(resp => this.userList = resp);
  }
  removeUser(user: User) {
    this.service.removeUser(user.id).subscribe(resp => {
      this.userList = this.userList.filter(ele => ele.id != user.id)
    });

  }
}
