import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestProgressRoutingModule } from './request-progress-routing.module';
import { RequestProgressComponent } from './request-progress.component';


@NgModule({
  declarations: [
    RequestProgressComponent
  ],
  imports: [
    CommonModule,
    RequestProgressRoutingModule
  ]
})
export class RequestProgressModule { }
