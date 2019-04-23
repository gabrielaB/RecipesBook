import { Component, OnInit } from '@angular/core';
import { URL } from 'url';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = '';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAWOWhL6wBi4-0-Kvw09KmG-Y4u9i4NmsA",
      authDomain: "recipesbook-60df9.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    if (feature === 'recipes') {
      document.getElementsByTagName("body")[0].style.backgroundImage = "url('../assets/imgs/recipes-bg.jpg')";
    } else if (feature === 'shoppingList') {
      document.getElementsByTagName("body")[0].style.backgroundImage = "url('../assets/imgs/list-bg.jpg')";
    } else if (feature === 'login' || feature === 'register') {
      document.getElementsByTagName("body")[0].style.backgroundImage = "url('../assets/imgs/login-bg.jpg')";
    }else{
      document.getElementsByTagName("body")[0].style.backgroundImage = "url('../assets/imgs/login-bg.jpg')";
    }
  }
}
