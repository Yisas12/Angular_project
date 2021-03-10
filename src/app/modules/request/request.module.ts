import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RequestRoutingModule } from './request-routing.module';
import { RequestComponent } from './request.component';
//import { FilterNamesPipe } from '../../shared/pipes/filter-names.pipe';
import { PrintComponent } from './request-list/print.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterNamesPipe } from 'src/app/shared/pipes/filter-names.pipe';

@NgModule({
    declarations: [
        RequestComponent,
        PrintComponent
    ],
    imports: [
        CommonModule,
        RequestRoutingModule,
        SharedModule
    ],
    providers:[
        FilterNamesPipe
    ]
})

export class RequestModule{}