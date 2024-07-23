import { Component } from '@angular/core';
import { ThemeService } from '../../../services/theme/theme.service';
@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.scss']
})
export class HeaderHomeComponent {
constructor(private themeService: ThemeService) {
     themeService.isDarkMode$.subscribe(( isDark: any) =>{
       this.isToggleChangeTheme = isDark
        console.log(this.isToggleChangeTheme)
     })
  }
   isToggleChangeTheme: boolean = false;
}
