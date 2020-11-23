import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoTradingWrapperRoutingModule } from './demo-trading-wrapper-routing.module';
import { DemoTradingWrapperComponent } from './demo-trading-wrapper.component';
import { WatchlistModule } from '../watchlist/watchlist.module';


@NgModule({
  declarations: [DemoTradingWrapperComponent],
  imports: [
    CommonModule,
    DemoTradingWrapperRoutingModule,
    WatchlistModule
  ],
  exports: [DemoTradingWrapperComponent],
  entryComponents: [DemoTradingWrapperComponent]
})
export class DemoTradingWrapperModule { }
