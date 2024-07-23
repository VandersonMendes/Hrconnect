import { NgModule, APP_INITIALIZER} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component';
import { AuthRoutingModule } from './service/auth-routing.module';
import { AutoLoginService } from '../services/auto-login.service';
export function appInitializer(auto : AutoLoginService, ) {
  return () => auto.autoLogin();
}
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    AuthRoutingModule
  ],
  providers: [
       {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      deps: [AutoLoginService],
      multi: true,
    },
  ],
})
export class AuthModule { }
