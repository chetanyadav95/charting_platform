import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoTradingWrapperComponent } from './demo-trading-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: DemoTradingWrapperComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./../dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'funds',
        loadChildren: () => import('./../funds/funds.module').then(m => m.FundsModule)
      },
      {
        path: 'chart',
        loadChildren: () => import('./../historical-data/historical-data.module').then(m => m.HistoricalDataModule)
      },
      {
        path: 'positions',
        loadChildren: () => import('./../positions/positions.module').then(m => m.PositionsModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoTradingWrapperRoutingModule {}
