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
        // loadChildren: () => import('./../historical-data/historical-data.module').then(m => m.HistoricalDataModule)
        loadChildren: () => import('./../tv-chart-container/tv-chart-container.module').then(m => m.TvChartContainerModule)
      },
      {
        path: 'positions',
        loadChildren: () => import('./../positions/positions.module').then(m => m.PositionsModule)
      },
      {
        path: 'forum/a',
        loadChildren: () => import('./../forums/forums.module').then(m => m.ForumsModule)
      },
      {
        path: 'forums',
        loadChildren: () => import('./../forum-list/forum-list.module').then(m => m.ForumListModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoTradingWrapperRoutingModule {}
