import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from 'src/app/service/theme.service';
@Component({
  selector: 'app-login',
  standalone:true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports :[CommonModule]
})
export class LoginComponent implements  OnInit {
  constructor (private themeService: ThemeService){
    
  }
  ngOnInit(): void {
    // const prefersColorTheme =  window.matchMedia('(prefers-color-scheme: dark)');
    // if(prefersColorTheme.matches){
    //   localStorage.setItem('theme', 'dark')
    //   this.isToggleChangeTheme = true;
    // }else{
    //   localStorage.setItem('theme', 'ligth')
    //   this.isToggleChangeTheme = false;
    // }
  }
  isToggleChangeTheme:  boolean = false;
    isClickChangeTheme(){
      this.isToggleChangeTheme = !this.isToggleChangeTheme
      this.themeService.toggleDarkMode(!this.themeService.isDarkMode.value)
    }
}
