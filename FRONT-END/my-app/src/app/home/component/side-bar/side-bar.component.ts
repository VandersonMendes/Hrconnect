import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { CommonModule } from '@angular/common';
import { LogOutService } from '../../services/log-out.service';
@Component({
  selector: 'app-side-bar',
  standalone: true,
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  imports: [CommonModule]
})
export class SideBarComponent {
    isToggleChangeTheme: boolean = false;
    constructor(private themeService: ThemeService,  public logOutService: LogOutService) {
    const prefersTheme = localStorage.getItem('theme');
    if (prefersTheme === 'dark') {
      this.isToggleChangeTheme = true
    }
    }
  isClickChangeTheme(): void {
    this.isToggleChangeTheme = !this.isToggleChangeTheme;
    this.themeService.toggleDarkMode(!this.themeService.isDarkMode.value)
  }

}
