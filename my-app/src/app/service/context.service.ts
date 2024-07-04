import { Injectable } from '@angular/core';
import { DateLogin } from '../interfaces/dateLogin';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ContextService {

  constructor(private router: Router) {
    console.log(this.advanceLogin)
  }
  advanceLogin: boolean = false
  saveDateLogin(dateLogin: DateLogin) {
    sessionStorage.setItem('dateLogin', JSON.stringify(dateLogin));
  }

  appInitializerRouter(){
    // this.router.navigate(['l/create']);
    // if()
  }
}
