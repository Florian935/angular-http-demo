import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NonJsonDataRoutingModule } from './non-json-data-routing.module';
import { NonJsonDataComponent } from './non-json-data.component';


@NgModule({
  declarations: [
    NonJsonDataComponent
  ],
  imports: [
    CommonModule,
    NonJsonDataRoutingModule
  ]
})
export class NonJsonDataModule { }
