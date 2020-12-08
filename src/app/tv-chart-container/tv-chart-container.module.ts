import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvChartContainerRoutingModule } from './tv-chart-container-routing.module';
import { TvChartContainerComponent } from './tv-chart-container.component';


@NgModule({
  declarations: [TvChartContainerComponent],
  imports: [
    CommonModule,
    TvChartContainerRoutingModule
  ],
  exports: [TvChartContainerComponent],
  entryComponents: [TvChartContainerComponent]
})
export class TvChartContainerModule { }
