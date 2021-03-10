import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppNavbarComponent } from './navbar/app-navbar.component';
import { FilterNamesPipe } from './pipes/filter-names.pipe';
//import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './footer/footer.component'
// components across the app

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    AppNavbarComponent,
    FooterComponent,
    FilterNamesPipe
  ],
  exports: [
    AppNavbarComponent,
    FooterComponent,
    FilterNamesPipe
  ]
})
export class SharedModule { }