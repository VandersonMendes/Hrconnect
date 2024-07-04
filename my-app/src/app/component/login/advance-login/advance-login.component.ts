import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/service/theme.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContextService } from 'src/app/service/context.service';
import { Router } from '@angular/router';
import * as e from 'express';
@Component({
  selector: 'app-advance-login',
  standalone: true,
  templateUrl: './advance-login.component.html',
  styleUrls: ['./advance-login.component.scss'],
  imports: [CommonModule, FormsModule],

})
export class AdvanceLoginComponent implements OnInit, OnDestroy {
  cnpj: string = '';
  senha: string = '';
  senhaConfirm: string = '';
  errorForm: boolean = false;
  errorMessage: string = '';
  buttonDisabled: boolean = false;
  constructor(private themeService: ThemeService, private context: ContextService, private router: Router) {
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
    ngOnDestroy(): void {
    // Cleanup and resource disposal code goes here
    console.log('Component destroyed');
  }
  isToggleChangeTheme: boolean = false;
  isClickChangeTheme() {
    this.isToggleChangeTheme = !this.isToggleChangeTheme
    this.themeService.toggleDarkMode(!this.themeService.isDarkMode.value)
  }
  onSubmit(event: Event) {
    event.preventDefault();
    if (this.cnpj.length === 0 || this.senha.length === 0 || this.senhaConfirm.length === 0) {
      this.errorForm = true
      this.errorMessage = 'Preencha todos os campos'
      return
    } else if (this.cnpj.length < 15) {
      this.errorForm = true;
      this.errorMessage = 'CNPJ invalido'
    } else if (this.senha !== this.senhaConfirm) {
      this.errorForm = true
      this.errorMessage = 'As senhas devem ser iguais'
      return
    }
    else {
      this.errorForm = false
    }
    if (!this.errorForm) {
      const dateLogin = sessionStorage.getItem('dateLogin')
      if (dateLogin) {
        const dateLoginObject = JSON.parse(dateLogin);
      } else {
        this.context.advanceLogin = false
        this.router.navigate(['login']);
      }
    }
  }

  onChangeForm(event: Event) {
    const number = Number(this.cnpj);
    if(Number.isNaN(number)){
        this.cnpj = ''
        this.errorForm = true
        this.errorMessage = 'Digite somente numeros'
    }else{
      this.errorForm = false
    }
    console.log(number)
    this.cnpj = this.cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    console.log(event)
  }

}
