import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'auth/sign/in', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./demo-trading-wrapper/demo-trading-wrapper.module').then(m => m.DemoTradingWrapperModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth-wrapper/auth-wrapper.module').then(m => m.AuthWrapperModule),
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
