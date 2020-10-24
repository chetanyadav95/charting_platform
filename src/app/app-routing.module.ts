import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'chart', pathMatch: 'full' },
  {
    path: 'chart',
    loadChildren: () => import('./historical-data/historical-data.module').then(m => m.HistoricalDataModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
