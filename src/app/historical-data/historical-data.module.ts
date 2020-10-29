import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricalDataRoutingModule } from './historical-data-routing.module';
import { HistoricalDataComponent } from './historical-data.component';
import { ChartWrapperModule } from '../chart-wrapper/chart-wrapper.module';
import { BuySellTradeModule } from '../buy-sell-trade/buy-sell-trade.module';


@NgModule({
  declarations: [HistoricalDataComponent],
  imports: [
    CommonModule,
    HistoricalDataRoutingModule,
    ChartWrapperModule,
    BuySellTradeModule
  ],
  exports: [HistoricalDataComponent],
  entryComponents: [HistoricalDataComponent]
})
export class HistoricalDataModule { }
