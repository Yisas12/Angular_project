import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { WebExplanationComponent } from './web-explanation/web-explanation.component';
import { WhoarethemComponent } from './whoarethem/whoarethem.component';

@NgModule({
    declarations: [
        HomeComponent,
        RequirementsComponent,
        WebExplanationComponent,
        WhoarethemComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule
    ]
})

export class HomeModule{}