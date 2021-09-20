import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueryParamsRoutingModule } from './query-params-routing.module';
import { QueryParamsComponent } from './query-params.component';


@NgModule({
  declarations: [
    QueryParamsComponent
  ],
  imports: [
    CommonModule,
    QueryParamsRoutingModule
  ]
})
export class QueryParamsModule { }
