import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthWrapperRoutingModule } from './auth-wrapper-routing.module';
import { AuthWrapperComponent } from './auth-wrapper.component';


@NgModule({
  declarations: [AuthWrapperComponent],
  imports: [
    CommonModule,
    AuthWrapperRoutingModule,
  ],
  exports: [AuthWrapperComponent],
  entryComponents: [AuthWrapperComponent]
})
export class AuthWrapperModule { }
