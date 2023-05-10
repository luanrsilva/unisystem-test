import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit{
  company: Company | undefined;

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    const user = this.authService.getUserLogged();
    this.company = user?.company
  }

  getAddress() {
   const address = `${this.company?.companyAddress}, ${this.company?.companyCity}, ${this.company?.companyState}`;
   return address;
  }

}
