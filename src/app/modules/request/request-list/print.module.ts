import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FilterNamesPipe } from '../../../shared/pipes/filter-names.pipe';

@NgModule({
    declarations: [
        FilterNamesPipe
    ],
    imports: [
        CommonModule,
        FilterNamesPipe
    ]
})

export class RequestModule{}