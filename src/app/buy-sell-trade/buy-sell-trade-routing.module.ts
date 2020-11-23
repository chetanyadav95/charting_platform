import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuySellTradeComponent } from './buy-sell-trade.component';


const routes: Routes = [
  {
    path: '',
    component: BuySellTradeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuySellTradeRoutingModule { }
