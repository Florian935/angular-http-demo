import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteWithBodyComponent } from './delete-with-body.component';

const routes: Routes = [
    {
        path: '',
        component: DeleteWithBodyComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DeleteWithBodyRoutingModule {}
