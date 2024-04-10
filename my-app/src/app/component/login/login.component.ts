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
  constructor (private themeService: ThemeService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.  
    const prefersColorTheme =  window.matchMedia('(prefers-color-scheme: dark)');
    if(prefersColorTheme.matches){
      localStorage.setItem('theme', 'dark')
      this.isToggleChangeTheme = true;
    }else{
      localStorage.setItem('theme', 'ligth')
      this.isToggleChangeTheme = false;
    }
  }
  isToggleChangeTheme:  boolean = false;
    isClickChangeTheme(){
      this.themeService.toggleDarkMode(!this.themeService.isDarkMode.value)
    }
  changeTheme(){
    this.isToggleChangeTheme = !this.isToggleChangeTheme;
    if(this.isToggleChangeTheme){
      localStorage.setItem('theme', 'dark')
    }else{
      localStorage.setItem('theme', 'ligth')
    }
  }
}
