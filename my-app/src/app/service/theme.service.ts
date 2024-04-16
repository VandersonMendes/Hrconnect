import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  isDarkMode = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.isDarkMode.asObservable();

  constructor() {
    // Verifique a preferência inicial do sistema operacional
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const storedPrefereinces = localStorage.getItem('theme');
    const isDarkFromLocalStorage = storedPrefereinces === 'dark';
    this.toggleDarkMode(prefersDark.matches || isDarkFromLocalStorage);
  }

  toggleDarkMode(isDark: boolean) {
    this.isDarkMode.next(isDark);
    document.body.classList.toggle('dark-mode', isDark);
    const  classTransition = [ 'animate', 'animate_animated', 'animate__fadeInUp']
    classTransition.forEach (x => document.body.classList.toggle(x, isDark))
    localStorage.setItem('theme', isDark ? 'dark' : 'ligth');
    return 
  }
}