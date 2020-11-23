import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundsRoutingModule } from './funds-routing.module';
import { FundsComponent } from './funds.component';


@NgModule({
  declarations: [FundsComponent],
  imports: [
    CommonModule,
    FundsRoutingModule
  ],
  exports: [FundsComponent],
  entryComponents: [FundsComponent]
})
export class FundsModule { }
