import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../component/side-bar/side-bar.component';
import { AutoLoginService } from 'src/app/services/auto-login/auto-login.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    this.autoLoginService.autoLogin(false);
  }
  constructor(private autoLoginService: AutoLoginService) {}
}
