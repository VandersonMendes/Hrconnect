import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from 'src/app/services/theme.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ContextService } from 'src/app/services/context.service';
import { ValidationDataService } from 'src/app/services/validation-data.service';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-account-create',
  standalone:true,
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss'],
  imports:[CommonModule, FormsModule, HeaderComponent]
})
export class AccountCreateComponent implements OnInit {
name: string = '';
  email: string = '';
  company: string = '';
  errorForm: boolean = false;
  errorMessage: string = '';
  constructor(private themeService: ThemeService, private context: ContextService, private router: Router, private validationService: ValidationDataService) {
    const prefersTheme = localStorage.getItem('theme');
    if (prefersTheme === 'dark') {
      this.isToggleChangeTheme = true
    }
    sessionStorage.removeItem('dateLogin');
    this.context.advanceLogin = false;
  }
  ngOnInit(): void {
    const prefersTheme = localStorage.getItem('theme');
    if (prefersTheme === 'dark') {
      sessionStorage.removeItem('dateLogin');
      this.context.advanceLogin = false;
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
    if (this.name === '' || this.email === '' || this.company === '') {
      this.errorForm = true
      this.errorMessage = 'Preencha todos os campos'
      return
    } else if (this.validationService.emailValidation(this.email)) {
      this.errorForm = true
      this.errorMessage = 'Email invalido'
      return
    } else {
      this.errorForm = false
    }
    if (!this.errorForm) {
      const dateLogin = {
        name: this.name,
        email: this.email,
        company: this.company
      }
      this.context.saveDateLogin(dateLogin)
      this.router.navigate(['registrar/advance']);
      this.context.advanceLogin = true;
      console.log(this.context.advanceLogin)
    }

  }

  onChangeForm(event: Event) {

  }
}
