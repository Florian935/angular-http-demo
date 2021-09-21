import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebouncingInteractionComponent } from './debouncing-interaction.component';

const routes: Routes = [
    { path: '', component: DebouncingInteractionComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DebouncingInteractionRoutingModule {}
