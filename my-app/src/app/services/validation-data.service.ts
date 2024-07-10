import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationDataService {

  constructor() { }
  emailValidation(email: string): any{
    const regexEmailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regexEmailValidation.test(email)) return true; else return false
  }

}
