import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthWrapperComponent } from './auth-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: AuthWrapperComponent,
    children: [
      {
        path: 'sign/up',
        loadChildren: () => import('./../sign-up/sign-up.module').then(m => m.SignUpModule)
      },
      {
        path: 'sign/in',
        loadChildren: () => import('./../sign-in/sign-in.module').then(m => m.SignInModule)
      },
      {
        path: 'register',
        loadChildren: () => import('./../register/register.module').then(m => m.RegisterModule)
      },
      {
        path: 'forgot/password',
        loadChildren: () => import('./../forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthWrapperRoutingModule {}
