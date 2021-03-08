import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestDetailComponent } from './modules/request-detail/request-detail.component';
import { RequestComponent } from './modules/request/request.component';
import { HomeComponent } from './modules/home/home.component'

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  {
    path: 'home', 
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'request',
    loadChildren: () => import('./modules/request/request.module').then(m => m.RequestModule)
  },
  {
    path: 'request-detail/:userId', 
    loadChildren: () => import('./modules/request-detail/request-detail.module').then(m => m.RequestDetailModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
