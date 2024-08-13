import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelComponent } from './component/painel/painel.component';
import { HomeRoutingModule } from './services/rotas/home-routing.module';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { HeaderComponent } from "../auth/component/header/header.component";
import { HeaderHomeComponent } from './component/header-home/header-home.component';
import { ModalComponent } from './component/painel/modal/modal.component';
@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    SideBarComponent,
    PainelComponent,
    HeaderComponent,
    ModalComponent,
    HeaderHomeComponent,
  ],
  declarations: [
    HomeComponent,

  ],
})
export class HomeModule { }
