import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from 'src/app/service/theme.service';
import { FormsModule } from '@angular/forms';
import { ContextService } from 'src/app/service/context.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class LoginComponent implements OnInit {
  name: string = '';
  email: string = '';
  company: string = '';
  errorForm: boolean = false;
  errorMessage: string = '';
  constructor(private themeService: ThemeService, private contextService: ContextService, private router: Router) {
    const prefersTheme = localStorage.getItem('theme');
    if (prefersTheme === 'dark') {
      this.isToggleChangeTheme = true;
    }


  }
  ngOnInit(): void {
    const prefersTheme = localStorage.getItem('theme');
    if (prefersTheme === 'dark') {
      this.isToggleChangeTheme = true;
    }
    this.errorForm = false;
    this.contextService.advanceLogin = false;
    console.log(this.errorForm)
  }
  isToggleChangeTheme: boolean = false;
  isClickChangeTheme() {
    this.isToggleChangeTheme = !this.isToggleChangeTheme;
    this.themeService.toggleDarkMode(!this.themeService.isDarkMode.value);
  }
  onSubmit(event: Event) {
    event.preventDefault();
    const regexEmailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (this.name.length === 0 || this.email.length === 0 || this.company.length === 0) {
      this.errorForm = true;
      this.errorMessage = 'Preencha todos os campos';
    }else if(!regexEmailValidation.test(this.email)){
      this.errorForm = true
      this.errorMessage = 'Email invalido';
      }else{
      this.errorForm = false;
    }
    console.log(this.errorForm)
    if(!this.errorForm){
      this.contextService.advanceLogin = true;
      this.router.navigate(['/login/advance']);
    }
  }

  onChangeForm(event: Event) {

  }
}
