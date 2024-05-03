import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {LoginComponent } from  '../../app/component/login/login.component'
import { AdvanceLoginComponent } from '../../app/component/login/advance-login/advance-login.component';
import { advanceLoginGuard } from '../../app/guard/advance-login.guard';

const routes: Routes = [
      {path : '', component: LoginComponent},
      {path: 'login', component: AdvanceLoginComponent, canActivate: [advanceLoginGuard]} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
