import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteWithBodyRoutingModule } from './delete-with-body-routing.module';
import { DeleteWithBodyComponent } from './delete-with-body.component';


@NgModule({
  declarations: [
    DeleteWithBodyComponent
  ],
  imports: [
    CommonModule,
    DeleteWithBodyRoutingModule
  ]
})
export class DeleteWithBodyModule { }
