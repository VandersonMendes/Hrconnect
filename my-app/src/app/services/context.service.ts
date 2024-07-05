import { Injectable } from '@angular/core';
import { DateCreate } from '../interfaces/dateLogin';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ContextService {

  constructor(private router: Router) {
    console.log(this.advanceLogin)
  }
  advanceLogin: boolean = false
  saveDateLogin(dateLogin: DateCreate) {
    sessionStorage.setItem('dateLogin', JSON.stringify(dateLogin));
  }

  appInitializerRouter(){
    //  fazer logica JWT, para fazer o login automatico caso se o usuario possui token
  }
}
