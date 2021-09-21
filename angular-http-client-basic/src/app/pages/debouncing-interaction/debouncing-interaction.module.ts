import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebouncingInteractionRoutingModule } from './debouncing-interaction-routing.module';
import { DebouncingInteractionComponent } from './debouncing-interaction.component';


@NgModule({
  declarations: [
    DebouncingInteractionComponent
  ],
  imports: [
    CommonModule,
    DebouncingInteractionRoutingModule
  ]
})
export class DebouncingInteractionModule { }
