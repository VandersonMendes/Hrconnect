import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ContextService {

  constructor() {
    console.log(this.advanceLogin)
  }
  advanceLogin: boolean = false
  dateLogin: any = {
    name: '',
    email: '',
    company: ''
  }
}
