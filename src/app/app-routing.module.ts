import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FotoPage } from './foto/foto.page';

const routes: Routes = [
  {
    path: 'foto',
    component: FotoPage
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'foto'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
