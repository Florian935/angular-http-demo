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
    {
        path: 'query-params',
        loadChildren: () =>
            import('./pages/query-params/query-params.module').then(
                (m) => m.QueryParamsModule
            ),
    },
    {
        path: 'request-progress',
        loadChildren: () =>
            import('./pages/request-progress/request-progress.module').then(
                (m) => m.RequestProgressModule
            ),
    },
    {
        path: 'debouncing-interaction-form',
        loadChildren: () =>
            import(
                './pages/debouncing-interaction-form/debouncing-interaction-form.module'
            ).then((m) => m.DebouncingInteractionFormModule),
    },
    {
        path: 'debouncing-interaction',
        loadChildren: () =>
            import(
                './pages/debouncing-interaction/debouncing-interaction.module'
            ).then((m) => m.DebouncingInteractionModule),
    },
    {
        path: 'delete-with-body',
        loadChildren: () =>
            import('./pages/delete-with-body/delete-with-body.module').then(
                (m) => m.DeleteWithBodyModule
            ),
    },
    {
        path: 'get-query-params',
        loadChildren: () =>
            import('./pages/get-query-params/get-query-params.module').then(
                (m) => m.GetQueryParamsModule
            ),
    },
    {
        path: '',
        redirectTo: 'entire-response',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'entire-response',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
