import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private authService: AuthenticationService) {}

  openCloseCompany: boolean = false;

  setOpenCloseCompany() {
    this.openCloseCompany = !this.openCloseCompany;
  }

  getIconClass(): string {
    if (!this.openCloseCompany) return 'fa fa-angle-down'
    else return 'fa fa-angle-up';
  }

  hasCompany() {
    const user = this.authService.getUserLogged();
    if (user?.company) {
      return true;
    } else {
      return false;
    }
  }

}
