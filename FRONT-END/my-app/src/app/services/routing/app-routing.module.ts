import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';;
import { AuthModule } from '../../auth/auth.module';
import { HomeModule } from '../../home/home.module';
import { advanceHomeGuard } from '../../home/services/guard/advance-home.guard';

const routes: Routes = [
  { path: 'home', loadChildren: () => HomeModule },
  { path: 'auth', loadChildren: () => AuthModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
