import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvChartContainerComponent } from './tv-chart-container.component';


const routes: Routes = [
  {
    path: '',
    component: TvChartContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvChartContainerRoutingModule { }
