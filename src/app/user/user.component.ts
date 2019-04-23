import { Component, OnInit } from '@angular/core';
import { ResolveStart, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
 
  email:string;


  constructor(
    private router: Router
   ) {
    
    }
  

  ngOnInit() {
    
  }
 
}
