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
    cnpjValidation(cnpj: string): any{
      const regexCnpjValidation = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
      if(!regexCnpjValidation.test(cnpj)) {
        return true
        }else if(cnpj.length < 15){
          return true
        }
    }
}
