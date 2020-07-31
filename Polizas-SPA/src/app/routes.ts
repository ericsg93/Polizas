import { PolizaEditComponent } from './polizas/poliza-edit/poliza-edit.component';
import { PolizaEditResolver } from './_resolvers/poliza-edit.resolver';
import { PolizaListResolver } from './_resolvers/poliza-list.resolver';
import { PolizasListComponent } from './polizas/polizas-list/polizas-list.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { PolizasCreateComponent } from './polizas/polizas-create/polizas-create.component';
import { PolizaComponent } from './polizas/poliza/poliza.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'polizas',
        component: PolizasListComponent,
        resolve: { polizas: PolizaListResolver },
      },
      {
        path: 'polizas-create',
        component: PolizasCreateComponent,
      },
      {
        path: 'poliza-edit/:id',
        component: PolizaEditComponent,
        resolve: { poliza: PolizaEditResolver },
      },
      {
        path: 'poliza/:id',
        component: PolizaComponent,
        resolve: { poliza: PolizaEditResolver },
      },
    ],
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
