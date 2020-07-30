import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { PolizasComponent } from './polizas/polizas.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'polizas',
        component: PolizasComponent,
        //resolve: { users: MemberListResolver },
      },
    ],
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
