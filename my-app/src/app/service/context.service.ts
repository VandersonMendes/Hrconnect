import { Injectable } from '@angular/core';
import { DateLogin } from '../interfaces/dateLogin';
@Injectable({
  providedIn: 'root'
})
export class ContextService {

  constructor() {
    console.log(this.advanceLogin)
  }
  advanceLogin: boolean = false
  saveDateLogin(dateLogin: DateLogin) {
    sessionStorage.setItem('dateLogin', JSON.stringify(dateLogin));
  }
}
