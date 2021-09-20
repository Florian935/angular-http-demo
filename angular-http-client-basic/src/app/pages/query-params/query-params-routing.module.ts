import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueryParamsComponent } from './query-params.component';

const routes: Routes = [{ path: '', component: QueryParamsComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class QueryParamsRoutingModule {}
