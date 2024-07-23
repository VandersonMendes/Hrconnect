import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelComponent } from './component/painel/painel.component';
import { HomeRoutingModule } from './services/home-routing.module';
import { HomeComponent } from './home/home.component';
@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
