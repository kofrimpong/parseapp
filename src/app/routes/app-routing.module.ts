import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { loginRoutes } from '../pages/login/routes';
import { eventRoutes } from '../pages/event/routes';
import { productRoutes } from '../pages/product/routes';
import { signupRoutes } from '../pages/signup/routes';

const routes: Routes = [
  ...loginRoutes,
  ...signupRoutes,
  ...productRoutes,
  ...eventRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
