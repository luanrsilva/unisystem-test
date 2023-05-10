import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(private router: Router, private authService: AuthenticationService) {}

  login() {
    const res = this.authService.login( this.email, this.password);
    if (res) {
      this.router.navigate(['company'])
    }
  }
}
