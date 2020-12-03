import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuySellTradeResolverService } from './buy-sell-trade-resolver.service';
import { BuySellTradeComponent } from './buy-sell-trade.component';


const routes: Routes = [
  {
    path: '',
    component: BuySellTradeComponent,
    resolve: {
      stock: BuySellTradeResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuySellTradeRoutingModule { }
