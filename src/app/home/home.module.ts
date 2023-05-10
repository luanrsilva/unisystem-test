import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SidebarModule } from '../components/sidebar/sidebar.module';
import { HomeRoutingModule } from './home-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { CompanyComponent } from './company/company.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    WelcomeComponent,
    CompanyComponent
  ],
  imports: [
    CommonModule, SidebarModule, HomeRoutingModule, SharedModule
  ]
})
export class HomeModule { }
