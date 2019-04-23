import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthGuard } from '../auth/auth-guard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() selectedComponent = new EventEmitter<string>();

  constructor(private dataStorageService: DataStorageService,
    private authService: AuthService,
    private guard:AuthGuard) {
  }

  featureSelected(feature: string) {
    this.selectedComponent.emit(feature);
  }


  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }


}
