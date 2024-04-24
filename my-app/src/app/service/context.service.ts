import { Injectable } from '@angular/core';
import { ConnectableObservable } from 'rxjs';

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
