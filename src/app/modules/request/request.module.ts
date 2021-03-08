import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RequestRoutingModule } from './request-routing.module';
import { RequestComponent } from './request.component';
import { FilterNamesPipe } from '../../shared/pipes/filter-names.pipe';
import { PrintComponent } from './request-list/print.component';

@NgModule({
    declarations: [
        RequestComponent,
        FilterNamesPipe,
        PrintComponent
    ],
    imports: [
        CommonModule,
        RequestRoutingModule
    ],
    exports: [
        FilterNamesPipe
    ]
})

export class RequestModule{}