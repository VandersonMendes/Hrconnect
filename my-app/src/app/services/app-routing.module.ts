import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvanceLoginComponent } from '../component/login/advance-login/advance-login.component'
import { advanceLoginGuard } from '../guard/advance-login.guard';
import { AcountAcessComponent } from '../component/login/acount-acess/acount-acess.component';
import { LostPasswordComponent } from '../component/login/lost-password/lost-password.component';
import { AccountCreateComponent } from '../component/login/account-create/account-create.component';
const routes: Routes = [
      {path : 'inscrever', component: AccountCreateComponent},
      {path: 'inscrever/advance', component: AdvanceLoginComponent, canActivate:[advanceLoginGuard]},
      {path: 'entrar', component: AcountAcessComponent},
      {path: 'perdeu-senha', component: LostPasswordComponent},
      // redirectTo, serve para quando o usuario garantir que o usuario vai para uma rota especifica.
      { path: '', redirectTo: '/inscrever', pathMatch: 'full' },
  { path: '**', redirectTo: '/inscrever' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
