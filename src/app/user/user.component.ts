import { Component, OnInit } from '@angular/core';
import { ResolveStart, Router } from '@angular/router';
import { UserService } from './user.service';
import { User } from './user.model';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  users: User[]
  user: User

  constructor(
    private router: Router,
    private userService: UserService) {
  }

  ngOnInit() {

   this.userService.getUsers()
   .subscribe(res => {
    this.users = res.users;

     console.log(res)
   })
     
  }

}
