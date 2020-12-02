import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuySellTradeRoutingModule } from './buy-sell-trade-routing.module';
import { BuySellTradeComponent } from './buy-sell-trade.component';
import { FormsModule } from '@angular/forms';
import { BuySellTradeResolverService } from './buy-sell-trade-resolver.service';


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
  ],
  providers: [BuySellTradeResolverService]
})
export class BuySellTradeModule { }
