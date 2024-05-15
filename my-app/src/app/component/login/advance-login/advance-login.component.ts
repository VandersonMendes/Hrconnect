import { Component } from '@angular/core';
import { ThemeService } from 'src/app/service/theme.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-advance-login',
  standalone: true,
  templateUrl: './advance-login.component.html',
  styleUrls: ['./advance-login.component.scss'],
  imports: [CommonModule, FormsModule],

})
export class AdvanceLoginComponent {
  cpnj: string = '';
  senha: string = '';
  senhaConfirm: string = '';
  errorForm: boolean = false;
  errorMessage: string = '';
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

  onChangeForm(event: Event) {

  }
}
