import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartWrapperComponent } from './chart-wrapper.component';
import { ChartWrapperRoutingModule } from './chart-wrapper-routing.module';
import { ChartWidgetDirective } from './chart-widget.directive';



@NgModule({
  declarations: [
    ChartWrapperComponent,
    ChartWidgetDirective
  ],
  imports: [
    CommonModule,
    ChartWrapperRoutingModule
  ],
  exports: [
    ChartWrapperComponent,
    ChartWidgetDirective
  ],
  entryComponents: [
    ChartWrapperComponent
  ]
})
export class ChartWrapperModule { }
