import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RequestComponent } from './modules/request/request.component';
import { from } from 'rxjs';
import { RequestService } from './core/services/request.service';
import { ModelsComponent } from './core/models/models.component';

import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './modules/home/home.module';
import { RequestModule } from './modules/request/request.module';
//import { FilterNamesPipe } from './shared/pipes/filter-names.pipe';
//el import de requestdetailsmodule creo que va en request

@NgModule({
  declarations: [
    AppComponent,
    ModelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    HomeModule,
    RequestModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
