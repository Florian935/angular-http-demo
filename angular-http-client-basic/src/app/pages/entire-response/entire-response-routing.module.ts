import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntireResponseComponent } from './entire-response.component';

const routes: Routes = [
    {
        path: '',
        component: EntireResponseComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EntireResponseRoutingModule {}
