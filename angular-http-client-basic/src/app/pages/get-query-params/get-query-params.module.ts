import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetQueryParamsRoutingModule } from './get-query-params-routing.module';
import { GetQueryParamsComponent } from './get-query-params.component';


@NgModule({
  declarations: [
    GetQueryParamsComponent
  ],
  imports: [
    CommonModule,
    GetQueryParamsRoutingModule
  ]
})
export class GetQueryParamsModule { }
