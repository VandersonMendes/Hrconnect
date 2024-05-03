import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from 'src/app/service/theme.service';
import { FormsModule } from '@angular/forms';
import { ContextService } from 'src/app/service/context.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-advance-login',
  standalone: true,
  templateUrl: './advance-login.component.html',
  styleUrls: ['./advance-login.component.scss'],
    imports: [CommonModule, FormsModule]
})
export class AdvanceLoginComponent implements OnInit{
  cnpj: string = '';
  senha: string = '';
  senhaConfirm: string = '';
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
   onChangeForm(event: Event) {
  
  }
  onSubmit(event: Event) {
    event.preventDefault();
      const regexNumeros = /\d/;    
      if (this.cnpj.length === 0 || this.senha.length === 0 || this.senhaConfirm.length === 0) {
      this.errorForm = true;
      this.errorMessage = 'Preencha todos os campos';
    }else if(this.senha.length > 13 || this.senhaConfirm.length > 13 || this.senha.length < 4 || this.senhaConfirm.length < 4){
      this.errorForm = true
      this.errorMessage = 'Senha é no maximo 12 caracteres e minimo 4 caracteres ';
      }else if(this.cnpj.replace(/[^0-9]/g, '').length < 14 || this.cnpj.replace(/[^0-9]/g, '').length > 14){
      console.log('cpnj invalido')
      this.errorForm = true;
      this.errorMessage = 'CNPJ invalido';
    }else{
      this.errorForm = false;
    }
    if(!this.errorForm){
      this.contextService.advanceLogin = true;
      this.router.navigate(['/login/advance']);
    }
  }

 
}
