import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RequestDetailRoutingModule } from './request-detail-routing.module';
import { RequestDetailComponent } from './request-detail.component';
import { EpisodiosComponent } from './components/episodes/episodios.component';
import { DatosComponent } from './components/data/datos.component';
import { ImageComponent } from './components/image/image.component';

@NgModule({
    declarations: [
        RequestDetailComponent, 
        EpisodiosComponent, 
        DatosComponent, 
        ImageComponent
    ],
    imports: [
        CommonModule,
        RequestDetailRoutingModule
    ]
})

export class RequestDetailModule{}