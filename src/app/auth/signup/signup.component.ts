import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private sanitizer: DomSanitizer,) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);
  }

  getDynamicHeight(){
    let height = window.innerHeight;
    const style = `height: ${height}px`;
    return this.sanitizer.bypassSecurityTrustStyle(style);

   }
}
