import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NavigationBarModule } from '../navigation-bar/navigation-bar.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    NavigationBarModule
  ],
  exports: [HeaderComponent],
  entryComponents: [HeaderComponent]
})
export class HeaderModule { }
