import { Component, OnInit } from '@angular/core';
import { ModalCompanyService } from 'src/app/components/modal-company/modal-company.service';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit{

  userLogged: User | undefined;

  constructor(private authService: AuthenticationService,
    private modalService: ModalCompanyService) {}

  ngOnInit(): void {
    this.userLogged = this.authService.getUserLogged();
  }

  getUserName() {
    const name = this.userLogged?.fullName.split(' ')[0];
    return name;
  }

  openModal() {
    this.modalService.showModal();
  }

}
