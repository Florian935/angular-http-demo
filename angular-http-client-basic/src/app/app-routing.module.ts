import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'entire-response',
        loadChildren: () =>
            import('./pages/entire-response/entire-response.module').then(
                (m) => m.EntireResponseModule
            ),
    },
    {
        path: 'non-json-data',
        loadChildren: () =>
            import('./pages/non-json-data/non-json-data.module').then(
                (m) => m.NonJsonDataModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
