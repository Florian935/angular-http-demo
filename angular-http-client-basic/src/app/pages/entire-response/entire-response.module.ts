import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntireResponseRoutingModule } from './entire-response-routing.module';
import { EntireResponseComponent } from './entire-response.component';


@NgModule({
  declarations: [
    EntireResponseComponent
  ],
  imports: [
    CommonModule,
    EntireResponseRoutingModule
  ]
})
export class EntireResponseModule { }
