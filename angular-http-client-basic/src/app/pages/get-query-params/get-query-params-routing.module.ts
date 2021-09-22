import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetQueryParamsComponent } from './get-query-params.component';

const routes: Routes = [{ path: '', component: GetQueryParamsComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GetQueryParamsRoutingModule {}
