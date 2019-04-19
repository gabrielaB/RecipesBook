import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dynamicWidth:any;
  dynamicHeight:any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {

  } 
  getDynamicHeight(){
    let height = window.innerHeight;
    const style = `height: ${height}px`;
    return this.sanitizer.bypassSecurityTrustStyle(style);

   }

}
