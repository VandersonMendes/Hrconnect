import { Component } from '@angular/core';
import { ThemeService } from '../../../services/theme/theme.service';
import { ContextService } from 'src/app/services/context.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { ApiService } from '../../../services/serviceApi/api.service';
import { LoadingService } from 'src/app/services/loading.service';
import { AutoLoginService } from '../../../services/auto-login/auto-login.service';
@Component({
  selector: 'app-acount-acess',
  standalone: true,
  templateUrl: './acount-acess.component.html',
  styleUrls: ['./acount-acess.component.scss'],
  imports: [CommonModule, FormsModule, HeaderComponent]
})
export class AcountAcessComponent  {
  email: string = '';
  senha: string = '';
  errorForm: boolean = false;
  errorMessage: string = '';
  toggleButtonVisiblePassword: boolean = false;
  srcIconCheckboxPassword: string = ''
  constructor(private themeService: ThemeService, private context: ContextService, private router: Router, private apiService: ApiService, private loadingService: LoadingService, private autoLoginService: AutoLoginService) {
    const prefersTheme = localStorage.getItem('theme');
    if (prefersTheme === 'dark') {
      this.isToggleChangeTheme = true
    }
    sessionStorage.removeItem('dateLogin');
    this.context.notAdvanceRegister();
    this.context.notAdvanceStartHome();
    console.log(this.context.getAcessHomeValue().valueOf())
  }
  ngOnInit(): void {
    const prefersTheme = localStorage.getItem('theme');
    if (prefersTheme === 'dark') {
      sessionStorage.removeItem('dateLogin');
      this.context.notAdvanceRegister();
      this.context.notAdvanceStartHome();
      this.isToggleChangeTheme = true;
    }
  }

  isToggleChangeTheme: boolean = false;
  isClickChangeTheme(): void {
    this.isToggleChangeTheme = !this.isToggleChangeTheme;
    this.themeService.toggleDarkMode(!this.themeService.isDarkMode.value)
  }
  OnChangeCheckBox(event: Event): void {
    event.preventDefault();
    this.toggleButtonVisiblePassword = !this.toggleButtonVisiblePassword;

  }
  onSubmit(event: Event): void {
    event.preventDefault();
    const regexEmailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(regexEmailValidation.test(this.email))
    if (this.email.length === 0 || this.senha.length === 0) {
      this.errorForm = true
      this.errorMessage = 'Preencha todos os campos'
      return
    } else if (!regexEmailValidation.test(this.email)) {
      this.errorForm = true
      this.errorMessage = 'Email invalido'
      return
    } else {
      this.errorForm = false
    }
    if (!this.errorForm) {
      const dateLogin = {
        email: this.email,
        password: this.senha
      }
      this.apiService.login(dateLogin.email, dateLogin.password).then(data => {
        data.subscribe((data: any) => {
          this.loadingService.show();
          localStorage.setItem('token', JSON.stringify(data.token));
          this.autoLoginService.autoLogin(true)
        });
      });
    }
  }
}
