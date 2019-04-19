import { Component } from '@angular/core';
import { URL } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = '';

  onNavigate(feature: string) {
   if(feature === 'recipes'){
    document.getElementsByTagName("body")[0].style.backgroundImage = "url('../assets/imgs/recipes-bg.jpg')";
   }else if(feature === 'shoppingList'){
    document.getElementsByTagName("body")[0].style.backgroundImage = "url('../assets/imgs/list-bg.jpg')";
   }else{
    document.getElementsByTagName("body")[0].style.backgroundImage = "url('../assets/imgs/bg.jpg')";
   }
  }
}
