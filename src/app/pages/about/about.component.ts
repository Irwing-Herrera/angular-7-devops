import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {
  users: IUser[] = [];

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit(){
    this.getUsers();
  }

  getUsers() {
    this._userService.getUsers().subscribe((users: IUser[]) => {
      this.users = users;
      console.log(this.users);
    });
  }
}
