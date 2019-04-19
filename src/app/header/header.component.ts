import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls:['./header.component.css']
})
export class HeaderComponent {
  @Output() selectedComponent = new EventEmitter<string>();

  featureSelected(feature: string){
    this.selectedComponent.emit(feature);
  }
}
