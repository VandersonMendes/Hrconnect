import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app/service/app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeService } from './service/theme.service';
import { LoginComponent } from './component/login/login.component';
import { AdvanceLoginComponent } from './component/login/advance-login/advance-login.component';
import { ContextService } from './service/context.service';
import { AcountAcessComponent } from './component/login/acount-acess/acount-acess.component';
import { LostPasswordComponent } from './component/login/lost-password/lost-password.component';
import { LostPasswordConfirmComponent } from './component/login/lost-password/lost-password-confirm/lost-password-confirm.component';
import { LostPasswordEmailComponent } from './component/login/lost-password/lost-password-email/lost-password-email.component';
export function appInitializer(context: ContextService) {
  return () => context.appInitializerRouter();
}

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginComponent,
    BrowserAnimationsModule,
    AdvanceLoginComponent,
    AcountAcessComponent,
    LostPasswordComponent,
    LostPasswordConfirmComponent,
    LostPasswordEmailComponent,

  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      deps: [ContextService],
      multi: true,
    },
    ThemeService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
