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
  cnpj: string = '';
  senha: string = '';
  senhaConfirm: string = '';
  errorForm: boolean = false;
  errorMessage: string = '';
  buttonDisabled: boolean = false;
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
    if(this.cnpj.length === 0 || this.senha.length === 0 || this.senhaConfirm.length === 0){
      this.errorForm = true
      this.errorMessage = 'Preencha todos os campos'
      return
    }else if(this.cnpj.length < 15){
     this.errorForm = true;
     this.errorMessage = 'CNPJ invalido'
      }else if(this.senha !== this.senhaConfirm)
      {
        this.errorForm = true
        this.errorMessage = 'As senhas devem ser iguais'
        return
      }
      else{
        this.errorForm = false
      }

  }

  onChangeForm(event: Event) {
    this.cnpj = this.cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  }
}
