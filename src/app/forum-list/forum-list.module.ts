import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumListRoutingModule } from './forum-list-routing.module';
import { ForumListComponent } from './forum-list.component';


@NgModule({
  declarations: [ForumListComponent],
  imports: [
    CommonModule,
    ForumListRoutingModule
  ],
  exports: [ForumListComponent],
  entryComponents: [ForumListComponent]
})
export class ForumListModule { }
