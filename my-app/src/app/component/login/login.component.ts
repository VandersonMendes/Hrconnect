import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from 'src/app/service/theme.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class LoginComponent implements OnInit {
  constructor(private themeService: ThemeService) {
    const prefersTheme = localStorage.getItem('theme');
    if (prefersTheme === 'dark') {
      this.isToggleChangeTheme = true
    }

  }
  ngOnInit(): void {
    const prefersTheme = localStorage.getItem('theme');
    if (prefersTheme === 'dark') {
      this.isToggleChangeTheme = true
    }
  }
  isToggleChangeTheme: boolean = false;
  isClickChangeTheme() {
    this.isToggleChangeTheme = !this.isToggleChangeTheme
    this.themeService.toggleDarkMode(!this.themeService.isDarkMode.value)
  }
  onSubmit(event: Event) {
    event.preventDefault();
  }
}
