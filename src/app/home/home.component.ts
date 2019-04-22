import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dynamicWidth:any;
  dynamicHeight:any;
  searchText:any;

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router) { }

  ngOnInit() {

  } 
  getDynamicHeight(){
    let height = window.innerHeight;
    const style = `height: ${height}px`;
    return this.sanitizer.bypassSecurityTrustStyle(style);

   }

   search() {
     this.router.navigate(['/recipes', {search: this.searchText}]);
  }

}
