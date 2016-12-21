import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'foo', pathMatch: 'full'},
  {path: 'bar', loadChildren: '/dummy/bar/bar.module'}
];

export const routing = RouterModule.forRoot(routes);
