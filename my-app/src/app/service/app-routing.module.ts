import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {LoginComponent } from  '../component/login/login.component'
import { AdvanceLoginComponent } from '../component/login/advance-login/advance-login.component'
import { advanceLoginGuard } from '../../app/guard/advance-login.guard';
import { AcountAcessComponent } from '../component/login/acount-acess/acount-acess.component';
import { LostPasswordComponent } from '../component/login/lost-password/lost-password.component';

const routes: Routes = [
      {path : 'registrar', component: LoginComponent},
      {path: 'registrar/advance', component: AdvanceLoginComponent, canActivate:[advanceLoginGuard]},
      {path: 'entrar', component: AcountAcessComponent},
      {path: 'perdeu-senha', component: LostPasswordComponent},
      // redirectTo, serve para quando o usuario garantir que o usuario vai para uma rota especifica.
      { path: '', redirectTo: '/registrar', pathMatch: 'full' },
  { path: '**', redirectTo: '/registrar' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
