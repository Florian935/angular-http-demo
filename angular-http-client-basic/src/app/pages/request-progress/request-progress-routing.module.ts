import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestProgressComponent } from './request-progress.component';

const routes: Routes = [{ path: '', component: RequestProgressComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RequestProgressRoutingModule {}
