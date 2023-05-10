import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CompanyComponent } from './company/company.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'company',
        pathMatch: 'full'
      },
      {
        path: 'company',
        component: CompanyComponent
      },
      {
        path: 'welcome',
        component: WelcomeComponent
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class HomeRoutingModule {}
