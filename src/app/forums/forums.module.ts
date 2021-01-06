import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumsRoutingModule } from './forums-routing.module';
import { ForumsComponent } from './forums.component';


@NgModule({
  declarations: [ForumsComponent],
  imports: [
    CommonModule,
    ForumsRoutingModule
  ],
  exports: [ForumsComponent],
  entryComponents: [ForumsComponent]
})
export class ForumsModule { }
