import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WatchlistComponent } from './watchlist.component';


const routes: Routes = [
  {
    path: '',
    component: WatchlistComponent
  },
  {
    path: 'buy-sell',
    loadChildren: () => import('../buy-sell-trade/buy-sell-trade.module').then(m => m.BuySellTradeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WatchlistRoutingModule { }
