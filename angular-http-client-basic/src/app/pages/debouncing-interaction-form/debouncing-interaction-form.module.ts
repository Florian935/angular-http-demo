import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebouncingInteractionFormRoutingModule } from './debouncing-interaction-form-routing.module';
import { DebouncingInteractionFormComponent } from './debouncing-interaction-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [DebouncingInteractionFormComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        DebouncingInteractionFormRoutingModule,
    ],
})
export class DebouncingInteractionFormModule {}
