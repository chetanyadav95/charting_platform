import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuySellTradeRoutingModule } from './buy-sell-trade-routing.module';
import { BuySellTradeComponent } from './buy-sell-trade.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [BuySellTradeComponent],
  imports: [
    CommonModule,
    BuySellTradeRoutingModule,
    FormsModule
  ],
  exports: [
    BuySellTradeComponent
  ],
  entryComponents: [
    BuySellTradeComponent
  ]
})
export class BuySellTradeModule { }
