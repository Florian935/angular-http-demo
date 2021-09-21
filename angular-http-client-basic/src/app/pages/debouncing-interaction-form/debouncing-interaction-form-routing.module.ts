import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebouncingInteractionFormComponent } from './debouncing-interaction-form.component';

const routes: Routes = [
    { path: '', component: DebouncingInteractionFormComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DebouncingInteractionFormRoutingModule {}
