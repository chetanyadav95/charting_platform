import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartWrapperComponent } from './chart-wrapper.component';


const routes: Routes = [
  {
    path: '',
    component: ChartWrapperComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartWrapperRoutingModule { }
