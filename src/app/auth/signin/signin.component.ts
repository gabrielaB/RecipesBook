import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);
  }

  getDynamicHeight(){
    let height = window.innerHeight;
    const style = `height: ${height}px`;
    return this.sanitizer.bypassSecurityTrustStyle(style);

   }
}
