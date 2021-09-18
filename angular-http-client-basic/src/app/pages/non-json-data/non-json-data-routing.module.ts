import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NonJsonDataComponent } from './non-json-data.component';

const routes: Routes = [{ path: '', component: NonJsonDataComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NonJsonDataRoutingModule {}
