import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelComponent } from '../component/painel/painel.component';
import { advanceHomeGuard } from './guard/advance-home.guard';
const routes: Routes = [
  { path: 'painel', component: PainelComponent, canActivate: [advanceHomeGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
