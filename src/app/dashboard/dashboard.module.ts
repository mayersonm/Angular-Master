import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../shared/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HighlightDirective } from './example/example-directives-and-pipes/highlight.directive';
import { OnlyNumber } from './example/example-directives-and-pipes/only-number.directive';
import { ReversePipe } from './example/example-directives-and-pipes/reverse.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HighlightDirective,
    OnlyNumber,
    ReversePipe,
    ...DashboardRoutingModule.components
  ],
  imports: [ 
    SharedModule,
    DashboardRoutingModule, 
  ]
})
export class DashboardModule { }
